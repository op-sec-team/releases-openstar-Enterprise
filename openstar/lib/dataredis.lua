LJ    4  L �  '  6 9B-  ' 6 9B A-    B   9  )  D ��	eval	time	%H%M
todayngx�redis.call('select',2)
    local date = '%s'
    local time = '%s'
    local realtime_req = tonumber(redis.call('HGET','realtime','request count')) or 0
    redis.call('HSET','realtime','request count',0)

    local old_req_date_ms = tonumber(redis.call('HGET','request',date..' '..time)) or 0
    redis.call('HSET','request',date..' '..time,realtime_req+old_req_date_ms)

    local old_gl_req = tonumber(redis.call('HGET','global','request count')) or 0
    redis.call('HSET','global','request count',realtime_req+old_gl_req)
    return "OK"
    �   '    9  )  D 	eval�redis.call('select',2)
    for i,v in ipairs(redis.call('hkeys','realtime')) do
        if string.sub(v,-15) == " global_request" then
            local realtime_method = tonumber(redis.call('hget','realtime',v))
            local old_gl_method = tonumber(redis.call('hget','global',v)) or 0
            redis.call('HSET','realtime',v,0)
            redis.call('HSET','global',v,realtime_method + old_gl_method)
        end
    end
    return "OK"
    �  '  6 9B-  ' 6 9B A-    B   9  )  D ��	eval	time	%H%M
todayngx�redis.call('select',2)
    local date = '%s'
    local time = '%s'
    local cnt = 0
    for i,v in ipairs(redis.call('hkeys','realtime')) do
        if string.sub(v,-5) == " deny" then
            local realtime_deny = tonumber(redis.call('hget','realtime',v))
            cnt = cnt + realtime_deny
            redis.call('HSET','realtime',v,0)
            local old_gl_deny = tonumber(redis.call('hget','global',v)) or 0
            redis.call('HSET','global',v,realtime_deny + old_gl_deny)
        end
    end
    local old_waf_deny = tonumber(redis.call('HGET','waf_deny',date..' '..time)) or 0
    redis.call('HSET','waf_deny',date..' '..time,cnt+old_waf_deny)
    return "OK"
    �  '  6 9B-  ' 6 9B A-    B   9  )  D ��	eval	time	%H%M
todayngx�redis.call('select',2)
    local date = '%s'
    local time = '%s'
    local cnt = 0
    for i,v in ipairs(redis.call('hkeys','realtime')) do
        if string.sub(v,-4) == " log" then
            local realtime_log = tonumber(redis.call('hget','realtime',v))
            cnt = cnt + realtime_log
            redis.call('HSET','realtime',v,0)
            local old_gl_log = tonumber(redis.call('hget','global',v)) or 0
            redis.call('HSET','global',v,realtime_log + old_gl_log)
        end
    end
    local old_waf_log = tonumber(redis.call('HGET','waf_log',date..' '..time)) or 0
    redis.call('HSET','waf_log',date..' '..time,cnt+old_waf_log)
    return "OK"
    �  '  6 9B-  ' 6 9B A-    B   9  )  D ��	eval	time	%H%M
todayngx�redis.call('select',2)
    local date = '%s'
    local time = '%s'
    for i,v in ipairs(redis.call('hkeys','realtime')) do
        if string.sub(v,-12) == " global_host" then
            local realtime_host = tonumber(redis.call('hget','realtime',v)) or 0
            redis.call('HSET','realtime',v,0)

            local old_gl_host = tonumber(redis.call('hget','global',v)) or 0
            redis.call('HSET','global',v,realtime_host + old_gl_host)

            local old_host_date_ms = tonumber(redis.call('HGET',v,date..' '..time)) or 0
            redis.call('HSET',v,date..' '..time,realtime_host+old_host_date_ms)
        end
    end
    return "OK"
    �  '  6 9B-  ' 6 9B A-    B   9  )  D ��	eval	time	%H%M
todayngx�redis.call('select',2)
    local date = '%s'
    local time = '%s'
    for i,v in ipairs(redis.call('hkeys','realtime')) do
        if string.sub(v,-10) == " host_byte" then
            local realtime_host_byte = tonumber(redis.call('hget','realtime',v)) or 0
            redis.call('HSET','realtime',v,0)

            local old_gl_host_byte = tonumber(redis.call('hget','global',v)) or 0
            redis.call('HSET','global',v,realtime_host_byte + old_gl_host_byte)

            local old_host_byte_date_ms = tonumber(redis.call('HGET',v,date..' '..time)) or 0
            redis.call('HSET',v,date..' '..time,realtime_host_byte + old_host_byte_date_ms)
        end
    end
    return "OK"
    �  H-    B  X�+ '   &J -   B    X�+ '  &J -   B    X�+ '  &J -   B    X�+ '  &J -   B    X�+ '  &J -   B    X�+ '  &J + L ��	�
���gl_hosts_byte error :gl_hosts_count error :gl_waf_log_count error :gl_waf_deny_count error :gl_method_count error :gl_request_count error :�   "6   6 6 96 9  6 ' B  X�  B X�3	  )  ) B' =
3 3 3	 3
 3 3 3 =2  �L all_Statistics       	0.02_VERSION functiontable.newrequireformatstring	dateos	type
pcall 