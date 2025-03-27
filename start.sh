



cd /sdcard/acode/web1/

rm -rf public; hugo server -w --minify --noBuildLock 

rm -rf public; hugo --minify --noBuildLock

hugo new posts/log-update-250301.md  --noBuildLock 



# 本地后台(身份验证)
npx decap-server

# hugo本地网站(后台管理)
http://localhost:1313/admin




# 1. 先获取远程更新（不合并）
git fetch origin

# 2. 对比本地分支与远程分支的差异
git diff HEAD..origin/main    # 查看当前分支与远程main分支的差异
git diff origin/main          # 查看远程分支具体改动内容

# 3. 确认无误后再合并
git merge origin/main



# 在线编辑后，需要拉取到本地
git pull ; git commit -m "Merge main at $(date '+%Y-%m-%d %H:%M:%S')" ;


# 提交更新
git add . ; git commit -m "Update main at $(date '+%Y-%m-%d %H:%M:%S')" ; git push -u origin main


find "./content" -type f -exec sed -i 's/网盘链接/pan/g' {} +
find "./content" -type f -exec sed -i 's/赞助按钮/reward-button/g' {} +
find "./content" -type f -exec sed -i 's/赞助二维码/reward-image/g' {} +