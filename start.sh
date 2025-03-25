
cd /sdcard/acode/web1/

rm -rf public; hugo server -w --minify --noBuildLock 

rm -rf public; hugo --minify --noBuildLock

hugo new posts/log-update-250301.md  --noBuildLock 



# 本地后台(身份验证)
npx decap-server

# hugo本地网站(后台管理)
http://localhost:1313/admin



# 在线编辑后，需要拉取到本地
git pull

# 提交更新
git add . ; git commit -m "Update main at $(date '+%Y-%m-%d %H:%M:%S')" ; git push -f origin main
