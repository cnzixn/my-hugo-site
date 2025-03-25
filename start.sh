
cd /sdcard/acode/web1/

rm -rf public; hugo server -w --minify --noBuildLock 

rm -rf public; hugo --minify --noBuildLock

hugo new posts/log-update-250301.md  --noBuildLock 



# 在线编辑后，需要拉取到本地
git pull

# 提交更新
git add .
git commit -m "Update main at $(date '+%Y-%m-%d %H:%M:%S')"
git push -f origin main
