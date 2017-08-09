git checkout master
gulp import
git branch -f gh-pages
git checkout gh-pages
git add -f *.html
git commit -m "deploy"
git push origin gh-pages
git checkout master
