const fs = require('fs');
const html = fs.readFileSync('./src/index.html', 'utf8');

test('La página contiene Hola Mundo', () => {
    expect(html).toMatch(/Hola Mundo/);
});