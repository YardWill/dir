#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const tstr = '├── ';
let strNow = '';

function walk(dir) {
    const files = fs.readdirSync(dir);
    strNow = tstr + strNow;
    files.forEach((e) => {
        const pathNow = path.join(dir, e);
        console.log(strNow + path.relative(dir, pathNow));
        const stats = fs.statSync(pathNow);
        if (stats.isDirectory()) {
            walk(pathNow);
            strNow = strNow.slice(4);
        }
    });
}

walk(__dirname);
