#!/usr/bin/env bash
git pull
npm run build
git commit -am "build"
git push
npm version $1
npm pub