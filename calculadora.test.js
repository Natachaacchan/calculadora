const puppeteer = require('puppeteer');

describe('Testes da Calculadora', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:8080'); // URL fornecida pelo live-server
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Teste de Adição: 5 + 3', async () => {
    await page.click('#button5'); // Supondo que o botão 5 tenha ID 'button5'
    await page.click('#buttonPlus'); // Supondo ID de +
    await page.click('#button3');
    await page.click('#buttonEqual'); // Supondo ID de =
    const result = await page.$eval('#display', el => el.textContent);

    expect(result).toBe('8'); // Verifica se o display mostra "8"
  });
});
