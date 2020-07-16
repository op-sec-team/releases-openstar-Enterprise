local _M = {
    version = 0.02
}


local ffi = require "ffi"
local base = require "resty.core.base"


local C = ffi.C
local ffi_str = ffi.string
local tonumber = tonumber
local assert = assert
local errno = ffi.errno
local type = type
local new_tab = base.new_tab
local error = error


local load_shared_lib
do
    local string_gmatch = string.gmatch
    local string_match = string.match
    local io_open = io.open
    local io_close = io.close

    local cpath = package.cpath

    function load_shared_lib(so_name)
        local tried_paths = new_tab(32, 0)
        local i = 1

        for k, _ in string_gmatch(cpath, "[^;]+") do
            local fpath = string_match(k, "(.*/)")
            fpath = fpath .. so_name
            -- Don't get me wrong, the only way to know if a file exist is
            -- trying to open it.
            local f = io_open(fpath)
            if f ~= nil then
                io_close(f)
                return ffi.load(fpath)
            end

            tried_paths[i] = fpath
            i = i + 1
        end

        return nil, tried_paths
    end  -- function
end  -- do


local resty_signal, tried_paths = load_shared_lib("librestysignal.so")
if not resty_signal then
    error("could not load librestysignal.so from the following paths:\n" ..
          table.concat(tried_paths, "\n"), 2)
end


ffi.cdef[[
int resty_signal_signum(int num);
]]


if not pcall(function () return C.kill end) then
    ffi.cdef("int kill(int32_t pid, int sig);")
end


if not pcall(function () return C.strerror end) then
    ffi.cdef("char *strerror(int errnum);")
end


-- Below is just the ID numbers for each POSIX signal. We map these signal IDs
-- to system-specific signal numbers on the C land (via librestysignal.so).
local signals = {
    NONE = 0,
    HUP = 1,
    INT = 2,
    QUIT = 3,
    ILL = 4,
    TRAP = 5,
    ABRT = 6,
    BUS = 7,
    FPE = 8,
    KILL = 9,
    USR1 = 10,
    SEGV = 11,
    USR2 = 12,
    PIPE = 13,
    ALRM = 14,
    TERM = 15,
    CHLD = 17,
    CONT = 18,
    STOP = 19,
    TSTP = 20,
    TTIN = 21,
    TTOU = 22,
    URG = 23,
    XCPU = 24,
    XFSZ = 25,
    VTALRM = 26,
    PROF = 27,
    WINCH = 28,
    IO = 29,
    PWR = 30,
}


function _M.kill(pid, sig)
    assert(sig)

    local signum
    if type(sig) == "number" then
        signum = sig

    else
        local id = signals[sig]
        if not id then
            return nil, "unknown signal name"
        end

        signum = tonumber(resty_signal.resty_signal_signum(id))
        if signum < 0 then
            error("missing C def for signal ", sig)
        end
    end

    local rc = tonumber(C.kill(assert(pid), signum))
    if rc == 0 then
        return true
    end

    local err = ffi_str(C.strerror(errno()))
    return nil, err
end


function _M.signum(name)
    return signals[name]
end


return _M
