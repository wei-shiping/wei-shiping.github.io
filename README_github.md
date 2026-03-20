// 打包

//npm run build

// git add .

// git commit -m "随便输"

// git push

//进入华为云服务器

//进入nginx web 目录 html下的bottle-resume-vue

// cd /var/www/html/bottle-resume-vue/

//拉取最新代码

//git pull

//输入账号密码 拉取成功

//进入nginx web 目录

// cd /var/www/html/

// 复制 /var/www/html/bottle-resume-vue/dist下的dist中的所有文件到 /var/www/html/

// sudo cp -r /var/www/html/bottle-resume-vue/dist/* /var/www/html/

//重新加载Nginx配置：

//sudo nginx -s reload

//或者

//sudo systemctl reload nginx


//安装指定版本的 Node.js：

// nvm install <version> # 安装特定版本，例如 nvm install v14.17.0


// 列出所有可安装的 Node.js 版本

// nvm ls-remote # 列出远程服务器上的所有可用版本


// 列出已安装的 Node.js 版本：

// nvm list # 显示已安装的 Node.js 版本和当前使用的版本

// 切换到已安装的某个版本：

// nvm use <version> # 切换到指定版本，例如 nvm use v12.22.11

// 设置默认版本：

// nvm alias default <version> # 设置默认启动的 Node.js 版本