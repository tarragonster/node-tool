// import * as json from "../puppeteer/output/22.json"
import * as json from "./okex-trading6-01-04-22.json"
import converter from "json-2-csv";
import fs from "fs";

async function convert2Csv() {
  await converter.json2csv(json.default.data.hits, async (err, csv) => {
    if (err) {
      throw err;
    }

    // print CSV string
    await fs.writeFileSync("./module/json-to-csv/output/okex-trading6-01-04-22.csv", csv)
  });
}

function main() {
  convert2Csv()
}

main();
// source ~/.bashrc
// node --experimental-json-modules module/json-to-csv/index.js