const chalk = require('chalk');
const fs = require('fs');

function throwError(err) {
    throw new Error(chalk.red(err.code, 'file not found'));
}

function getLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const links = [];
    let temp;

    while ((temp = regex.exec(text)) !== null) {
        links.push({ [temp[1]]: temp[2] });
    }

    return links;
}

async function getFile(path) {
    const encoding = 'utf-8';

    try {
        const text = await fs.promises.readFile(path, encoding);
        console.log(getLinks(text));
    } catch (err) {
        throwError(err);
    }
}

getFile('./arquivos/texto1.md')