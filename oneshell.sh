#!/bin/bash                                                                                               
#===================================================================#
#   System Required:  CentOS 7、Debian、Ubuntu                                    #
#   Description: Install express-images for CentOS7                        #
#   Author: Azure <2894049053@qq.com>                               #
#   github: @baiyutribe <https://github.com/baiyuetribe>            #
#   Blog:  佰阅部落 https://baiyue.one                               #
#===================================================================#
#
#  .______        ___       __  ____    ____  __    __   _______      ______   .__   __.  _______ 
#  |   _  \      /   \     |  | \   \  /   / |  |  |  | |   ____|    /  __  \  |  \ |  | |   ____|
#  |  |_)  |    /  ^  \    |  |  \   \/   /  |  |  |  | |  |__      |  |  |  | |   \|  | |  |__   
#  |   _  <    /  /_\  \   |  |   \_    _/   |  |  |  | |   __|     |  |  |  | |  . `  | |   __|  
#  |  |_)  |  /  _____  \  |  |     |  |     |  `--'  | |  |____  __|  `--'  | |  |\   | |  |____ 
#  |______/  /__/     \__\ |__|     |__|      \______/  |_______|(__)\______/  |__| \__| |_______|
#
#一键脚本
#
#
# 设置字体颜色函数
function blue(){
    echo -e "\033[34m\033[01m $1 \033[0m"
}
function green(){
    echo -e "\033[32m\033[01m $1 \033[0m"
}
function greenbg(){
    echo -e "\033[43;42m\033[01m $1 \033[0m"
}
function red(){
    echo -e "\033[31m\033[01m $1 \033[0m"
}
function redbg(){
    echo -e "\033[37;41m\033[01m $1 \033[0m"
}
function yellow(){
    echo -e "\033[33m\033[01m $1 \033[0m"
}
function white(){
    echo -e "\033[37m\033[01m $1 \033[0m"
}
#            
# @安装docker
install_docker() {
    docker version > /dev/null || curl -fsSL get.docker.com | bash 
    systemctl start docker
    systemctl enable docker.service
}
install_docker_compose() {
	curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
	chmod +x /usr/local/bin/docker-compose
}


# 单独检测docker是否安装，否则执行安装docker。
check_docker() {
	if [ -x "$(command -v docker)" ]; then
		echo "docker is installed"
		# command
	else
		echo "Install docker"
		# command
        greenbg "未检测到docker，程序正在安装docker环境，请耐心等待"
		install_docker
	fi
}
check_docker_compose() {
	if [ -x "$(command -v docker-compose)" ]; then
		echo "docker-compose is installed"
		# command
	else
		echo "Install docker-compose"
		# command
		install_docker_compose
	fi
}





# 输出结果


notice(){
    green "=================================================="
    green "搭建成功，现在您可以直接访问了"
    green "---------------------------"
    green " 管理员后台地址：http://ip:3000/adminlogin"
    green " 宿主机数据： /opt/express-ffmpeg"
    green "---------------------------"
    white "其他信息"
    white "管理员用户名：$ADMIN_USER 密码：$ADMIN_PWD 数据库密码：$DB_PWD "
    greenbg "一键脚本说明文档： https://baiyue.one/archives/479.html"
    green "=================================================="
    white "开发者：Azure   Dcocker by 佰阅部落  问题反馈QQ群：635925514"
    white "项目地址： https://gitee.com/quazero/express-ffmpeg"

}

#创建配置config文件夹



intsall_input(){
    yellow "感谢使用 “express-ffmpeg（云转码切片CMS平台）一键安装脚本”"
    white "--------------------------------------------------------"
    greenbg "请注意这些要求：服务器为centos7、debian、ubuntu;3000端口未被占用"
    white "--------------------------------------------------------"
    read -e -p "请输入管理员用户名(默认账号：admin)：" $ADMIN_USER
    [[ -z "${ADMIN_USER}" ]] && ADMIN_USER="admin"
    read -e -p "请输入管理员密码(默认密码：baiyue.one)：" $ADMIN_PWD
    [[ -z "${ADMIN_PWD}" ]] && ADMIN_PWD="baiyue.one" 
    yellow "请确认输入的信息，输入y继续,否则退出"
    read -e -p "是否继续？：" $CONTINUM_IF
    if [[ "${vnum}" == "y" ]]; then
    greenbg "程序即将开始自动安装，完后会输出信息，安装过程约1~3分钟左右请耐心等待" 
    install_main
    fi             
}

# 开始安装express-ffmpeg
install_main(){
    intsall_input
    rm -rf /opt/express-ffmpeg
mkdir -p /opt/express-ffmpeg/config
#增加配置文件并编辑，然后将下面一整条复制到SSH客户端运行
cat > /opt/express-ffmpeg/config/auth.js <<EOF
module.exports = {
    user: "USERNAME",
    password: "USERPWD",
    db: "ffmpeg",
    dbuser: "ffmpeg",
    dbpassword: "ffmpeg",
    secret: "yoursecret",
    login: "/adminlogin",
    loginmsg: "404 Not Found"
};
EOF
    sed -i "s/USERNAME/$ADMIN_USER/g" /opt/express-ffmpeg/config/auth.js
    sed -i "s/USERPWD/$ADMIN_PWD/g" /opt/express-ffmpeg/config/auth.js
    yellow "首次安装会拉取镜像，国内速度较慢，请耐心等待"
    docker run --restart=always --name express-ffmpeg -d \
    -p 3000:3000 \
    -v /opt/express-ffmpeg/mongodb:/data \
    -v /opt/express-ffmpeg/config:/express-ffmpeg/config \
    -v /opt/express-ffmpeg/movies:/express-ffmpeg/movies \
    -v /opt/express-ffmpeg/videos:/express-ffmpeg/public/videos \
    -v /opt/express-ffmpeg/uploads:/express-ffmpeg/public/uploads \
    -v /opt/express-ffmpeg/images:/express-ffmpeg/public/images \
    moerats/express-ffmpeg
    notice        
}


# 停止服务
stop_express-ffmpeg(){
    docker stop express-ffmpeg
}

# 重启服务
restart_express-ffmpeg(){
    docker restart express-ffmpeg
}

# 卸载
remove_all(){
    docker rm -f express-ffmpeg
}



#开始菜单
start_menu(){
    clear
	echo "


  ██████╗  █████╗ ██╗██╗   ██╗██╗   ██╗███████╗    ██████╗ ███╗   ██╗███████╗
  ██╔══██╗██╔══██╗██║╚██╗ ██╔╝██║   ██║██╔════╝   ██╔═══██╗████╗  ██║██╔════╝
  ██████╔╝███████║██║ ╚████╔╝ ██║   ██║█████╗     ██║   ██║██╔██╗ ██║█████╗  
  ██╔══██╗██╔══██║██║  ╚██╔╝  ██║   ██║██╔══╝     ██║   ██║██║╚██╗██║██╔══╝  
  ██████╔╝██║  ██║██║   ██║   ╚██████╔╝███████╗██╗╚██████╔╝██║ ╚████║███████╗
  ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝                                                            
    "
    greenbg "==============================================================="
    greenbg "简介：express-ffmpeg（云转码切片CMS平台）一键安装脚本              "
    greenbg "系统：Centos7、Ubuntu等                                         "
    greenbg "脚本作者：Azure  QQ群：635925514                                "
    greenbg "程序开发者： 屈阿零/express-ffmpeg                               "
    greenbg "网站： https://baiyue.one                                       "
    greenbg "主题：专注分享优质web资源                                        "
    greenbg "Youtube/B站： 佰阅部落                                          "
    greenbg "==============================================================="
    echo
    yellow "使用前提：脚本会自动安装docker，国外服务器搭建只需1min~2min"
    yellow "国内服务器下载镜像稍慢，请耐心等待"
    blue "备注：非80端口可以用caddy反代，自动申请ssl证书，到期自动续期"
    echo
    white "—————————————程序安装——————————————"
    white "1.安装express-ffmpeg"
    white "—————————————杂项管理——————————————"
    white "2.停止express-ffmpeg"
    white "3.重启express-ffmpeg"
    white "4.卸载express-ffmpeg"
    white "5.清除本地缓存（仅限卸载后操作）"
    white "—————————————域名访问——————————————" 
    white "6.Caddy域名反代一键脚本(可以实现非80端口使用域名直接访问)"
    blue "0.退出脚本"
    echo
    echo
    read -p "请输入数字:" num
    case "$num" in
    1)
	check_docker
    check_docker_compose
    install_main
	;;
	2)
    stop_express-ffmpeg
    green "express-ffmpeg程序已停止运行"
	;;
	3)
    restart_express-ffmpeg
    green "express-ffmpeg程序已重启完毕"
	;;
	4)
    remove_all
	;;
	5)
    rm -fr /opt/express-ffmpeg
    green "清除完毕"
	;;    
	6)
    bash <(curl -L -s https://raw.githubusercontent.com/Baiyuetribe/codes/master/caddy/caddy.sh)
	;;
	0)
	exit 1
	;;
	*)
	clear
	echo "请输入正确数字"
	sleep 5s
	start_menu
	;;
    esac
}

start_menu
