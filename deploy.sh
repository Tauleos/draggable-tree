#!/usr/bin/env bash
git pull
npm run build
git commit -am "build"
npm version $1
npm pub