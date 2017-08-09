git checkout master
git pull origin master
gulp import
git branch -f gh-pages
git checkout gh-pages
git add -f *.html
git commit -m "deploy `date '+%m/%d/%y-%H:%M:%S'`"
git push origin gh-pages --force
git checkout master
