# calculadora
acchan@policorp:~/calculadora$ npm test

> calculadora@1.0.0 test
> jest

 FAIL  ./calculadora.test.js
  Testes da Calculadora
    ✕ Teste de Adição: 5 + 3 (1 ms)

  ● Testes da Calculadora › Teste de Adição: 5 + 3

    net::ERR_CONNECTION_REFUSED at http://127.0.0.1:8080

       7 |     browser = await puppeteer.launch();
       8 |     page = await browser.newPage();
    >  9 |     await page.goto('http://127.0.0.1:8080'); // URL fornecida pelo live-server
         |     ^
      10 |   });
      11 |
      12 |   afterAll(async () => {

      at navigate (node_modules/puppeteer-core/src/cdp/Frame.ts:214:13)
      at Function.race (node_modules/puppeteer-core/src/util/Deferred.ts:49:14)
      at CdpFrame.goto (node_modules/puppeteer-core/src/cdp/Frame.ts:167:17)
      at CdpPage.goto (node_modules/puppeteer-core/src/api/Page.ts:1650:12)
      at Object.<anonymous> (calculadora.test.js:9:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        4.007 s
Ran all test suites.
acchan@policorp:~/calculadora$ 
