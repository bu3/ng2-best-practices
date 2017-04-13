#!/usr/bin/env bash


npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli

npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest

rm -rf node_modules dist # use rmdir on Windows
npm install --save-dev @angular/cli@latest
npm install