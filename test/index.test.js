const { getFile } = require('../index');

const arrayResult = [{
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}];

describe('getFile::', () => {
    it('is a function?', () => {
        expect(typeof getFile).toBe('function');
    });
    it('need return array with results', async () => {
        const result = await getFile('C:/Users/Caio/Documents/lib-markdown/test/arquivos/texto1.md');
        expect(result).toEqual(arrayResult);
    });
    it('need return message "links not found"', async () => {
        const result = await getFile('C:/Users/Caio/Documents/lib-markdown/test/arquivos/texto1_no_links.md');
        expect(result).toBe('links not found');
    });
});