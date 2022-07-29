const chalk = require('chalk');
const { getFile } = require('./index');

const path = process.argv;

async function processText(filePath) {
    const result = await getFile(filePath[2]);
    console.log(chalk.yellow('link list'), result);
}

processText(path);