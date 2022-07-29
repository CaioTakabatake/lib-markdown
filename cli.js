#!/usr/bin/env node

const chalk = require('chalk');
const { getFile } = require('./index');
const { validateURLs } = require('./http-validation');

const path = process.argv;

async function processText(filePath) {
    const result = await getFile(filePath[2]);
    if (path[3] === 'validate') {
        console.log(chalk.yellow('validated links'), await validateURLs(result));
    } else {
        console.log(chalk.yellow('link list'), result);
    }
}

processText(path);