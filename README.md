# get-local-ipv4
获取本地ipv4地址

开发微信小程序时，当你的移动端预览小程序需要进行访问本地服务时，是需要把地址配置为本地的IPv4地址。
所以，可以通过index.js获取ip。或者执行sh脚本直接把ip写入到环境文件。

两个脚本都同时接收一个参数。`dev`


# 本地开发
node执行:
```sh
node index.js dev

```

shell执行
```sh
buildEnv.sh dev
```

# 线上开发

```sh
buildEnv.sh
```


