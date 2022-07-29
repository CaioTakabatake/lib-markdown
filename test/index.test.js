const { getFile } = require('../index');

test('is a function?', () => {
    expect(typeof getFile).toBe('function');
});