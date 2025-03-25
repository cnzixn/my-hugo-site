
cd /sdcard/acode/web1/

rm -rf public; hugo server -w --minify --noBuildLock 

rm -rf public; hugo --minify --noBuildLock

hugo new posts/log-update-250301.md  --noBuildLock 
