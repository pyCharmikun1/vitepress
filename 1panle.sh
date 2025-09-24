#!/bin/bash

# 1Panel应用安装问题排查脚本
# 适用于网心云设备上的CasaOS系统

echo "========================================"
echo "   1Panel应用安装问题排查脚本"
echo "========================================"

# 检查是否为root用户
if [ "$(id -u)" -ne 0 ]; then
    echo "❌ 请使用root权限运行此脚本（可尝试在命令前加sudo）"
    exit 1
fi

# 1. 检查系统资源
echo "[1/6] 检查系统资源..."
echo "--- 磁盘空间 ---"
df -h | grep -E "(/dev/sda|/dev/mmcblk|/dev/root)"
echo "--- 内存使用 ---"
free -h

# 2. 检查Docker服务状态
echo "[2/6] 检查Docker环境..."
docker_status=$(systemctl is-active docker)
if [ "$docker_status" != "active" ]; then
    echo "❌ Docker服务未运行，正在启动..."
    systemctl start docker
    sleep 5
    if systemctl is-active docker >/dev/null; then
        echo "✅ Docker启动成功"
    else
        echo "❌ Docker启动失败，请检查Docker安装"
        echo "尝试重新安装Docker..."
        curl -fsSL https://get.docker.com | sh
        systemctl enable docker && systemctl start docker
    fi
else
    echo "✅ Docker服务运行正常"
fi

# 3. 检查Docker Compose版本[citation:6]
echo "[3/6] 检查Docker Compose版本..."
docker_compose_version=$(docker-compose version 2>/dev/null | grep -oP "version v?\K[0-9.]+" || echo "未安装")
if [ "$docker_compose_version" = "未安装" ]; then
    echo "❌ Docker Compose未安装，正在安装..."
    apt update
    apt install -y docker-compose-plugin
elif version_compare "$docker_compose_version" lt "2.0.0"; then
    echo "⚠️ Docker Compose版本较低（当前: $docker_compose_version），建议升级到v2.x[citation:6]"
    echo "尝试升级Docker Compose..."
    apt update
    apt install -y docker-compose-plugin
else
    echo "✅ Docker Compose版本正常 ($docker_compose_version)"
fi

# 4. 检查1Panel相关服务
echo "[4/6] 检查1Panel服务状态..."
if systemctl is-active 1panel >/dev/null; then
    echo "✅ 1Panel服务运行正常"
else
    echo "❌ 1Panel服务未运行，正在启动..."
    systemctl start 1panel
fi

# 5. 检查网络和防火墙设置[citation:9]
echo "[5/6] 检查网络配置..."
echo "--- 检查防火墙规则 ---"
if command -v ufw >/dev/null; then
    ufw status | grep -q "active" && echo "UFW防火墙已启用，检查1Panel端口(目标端口)规则"
fi

# 尝试重启1Panel服务以应用可能的配置更改
echo "重启1Panel服务..."
systemctl restart 1panel
sleep 3

# 6. 关键配置检查：Docker守护进程连接[citation:9]
echo "[6/6] 关键配置检查..."
if ! docker info >/dev/null 2>&1; then
    echo "❌ 无法连接到Docker守护进程[citation:9]"
    echo "尝试修复Docker连接..."
    # 检查并修复Docker socket权限
    usermod -aG docker casaos-user 2>/dev/null || echo "请将1Panel运行用户加入docker组"
    systemctl restart docker
    echo "✅ 已尝试修复Docker连接问题"
else
    echo "✅ 可以正常连接Docker守护进程"
fi

echo ""
echo "========================================"
echo "           基本检查完成"
echo "========================================"
echo ""
echo "📝 后续手动检查建议:"
echo "1. 登录1Panel网页面板，在'主机'菜单中检查Docker和Compose版本是否被正确识别"
echo "2. 尝试安装一个简单应用（如Nginx），观察错误信息"
echo "3. 如果应用安装时勾选'端口外部访问'后秒失败，可能是Docker Compose版本兼容性问题[citation:6]，请确保使用v2.x版本"
echo "4. 检查是否使用了反向代理[citation:10]，如果使用了OpenResty等反代1Panel，暂时关闭它再试"
