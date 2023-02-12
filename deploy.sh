#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# copy index.html to a 404 file to handle github pages 404 better
cp dist/index.html dist/404.html

# commit dist content on tmp branch
git checkout -B tmp
git add dist -f
git commit -m ":rocket: Publish"

# push content
git push origin `git subtree split --prefix dist tmp`:gh-pages --force

# cleanup
git checkout main
git branch -D tmp
