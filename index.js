const chalk = require('chalk');
const fs = require('fs');

function throwError(err) {
    throw new Error(chalk.red(err.code, 'file not found'));
}

function getFile(path) {
    const encoding = 'utf-8'
    fs.promises.readFile(path, encoding).then(data => console.log(chalk.green(data))).catch(reason => throwError(reason));
}

// function getFile(path) {
//     const encoding = 'utf-8'
//     fs.readFile(path, encoding, (err, data) => {
//         if (err) throwError(err);
//         console.log(chalk.green(data));
//     });
// }

getFile('./arquivos/texto1.md')