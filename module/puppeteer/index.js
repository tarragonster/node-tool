import puppeteer from "puppeteer";
import fs from "fs";


(async () => {
  const i = 22;
  // for (let i=2; i <= 20; i++) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://iotexscout.io/txs?a=io1q26064uer9c8xy55kllygp4t5pkj4prmdn9xd8&p=2`);
    const element = '.table > tbody > tr'
    const data = await page.$$eval(element, trs => trs.map(tr => { // https://stackoverflow.com/questions/52919183/how-to-scrape-a-table-using-puppeteer
      const tds = [...tr.getElementsByTagName('td')];
      const result = tds.map(td => td.textContent);
      return Object.assign({}, result)
    }))

    await fs.writeFileSync(`./module/puppeteer/output/${i}.json`, JSON.stringify(data))
    await browser.close();
  // }
})();

// node module/puppeteer/index.js