#!/usr/bin/env bash
git pull
npm run build
git commit -am "$1"
git push
npm version $2
npm pub
