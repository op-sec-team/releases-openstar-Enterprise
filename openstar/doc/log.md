### log模块在`base.json`中的配置

```json
{
    "onLocal": {
        "state": "on",
        "path": "/tmp/test",
        "format": "$dateTime $serverIP $httpHost $remoteIP $realIP $uri \"$payload\" $respCode $bodyBytesSent $timeUsed \"$referer\" \"$userAgent\" \"$cookie\" \"$customMsg\"\n"
    },
    "onRemote": {
        "state": "on",
        "socketType": "tcp",
        "sendBufferSize": 1048576,
        "host": "36.110.148.179",
        "port": 3306,
        "format": "<134>0 2016-12-28T10:48:43.849639+08:00 localhost waflog_tt $timeStamp $serverIP $httpHost $remoteIP $realIP $uri \"$payload\" $respCode $bodyBytesSent $timeUsed \"$referer\" \"$userAgent\" \"$cookie\" \"$customMsg\"\n"
     }
}
```
模式：onLocal/onRemote，分别代表将日志保存到本地/发送到远程机器.
- state: ［on/off]，代表开启或者关闭该模式
- format: 表示该模式下的日志格式，除了内置变量，其他皆为字符串


### 内置变量（大小写敏感）：

- $logTime: 本地时间
- $timeStamp: 时间戳
- $serverIP
- $httpHost
- $remoteIP
- $realIP
- $uri
- $payload
- $respCode
- $bodyBytesSent
- $request
- $timeUsed: 本次请求完成所用时间
- $referer
- $userAgent
- $cookie
- $customMsg: 自定义消息

syslog 中优先级计算方法
 ```json
 local _facilities = {
     local0=16,
     local1=17,
     local2=18,
     local3=19,
     local4=20,
     local5=21,
     local6=22,
     local7=23
 }
 
 local _severities = {
     emerg=0, -- 紧急
     alert=1, -- 报警
     crit=2,  -- 关键
     err=3,   -- 错误
     warn=4,  -- 警告
     notice=5,-- 通知
     info=6,  -- 消息
     debug=7  -- 调试
 } 
 local code = facility * 8 + severity
```
