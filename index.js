const os = require('os');
const fs = require('fs');
const path = require('path');

const envParam = process.argv[2] || ''; // 接收sh脚本执行时的第一个参数

// 默认读取无效局域网的WLAN
const getIPv4OrIPv6 =  (networkType = 'WLAN', ipType = 'IPv4') => {
    const interfaces = os.networkInterfaces();
    for (const name in interfaces) {
        const iface = interfaces[name];
        if (name === networkType) {
            for (let i = 0; i < iface.length; i++) {
                const alias = iface[i];
                if (alias.family === ipType && alias.internal === false) {
                    return alias.address;
                }
            }
        }
    }
    throw new Error('请检查网络状态是否连接!');
}

let ip = '';
if (envParam === 'dev') {
    ip = getIPv4OrIPv6('WLAN', 'IPv4');
} else {
    ip = 'https://test.online.com'; // 这里配置为线上的地址
}

const directoryPath = './config';
const filePath = path.join(directoryPath, 'data.env');
const fileContent = `service_address=${ip}`;

if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
}

fs.writeFileSync(filePath, fileContent);
