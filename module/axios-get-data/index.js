import axios from "axios";
import fs from "fs";

(async () => {
  let offset = 0;
  let limit = 100;
  for (let i = 0; i < 16; i++) {
    const uri = `https://www.oklink.com/api/explorer/v1/okexchain/addresses/0xd129ce9c8cc5ad4d254ac3438895ed31c7a1b5ef/transactions/condition?t=1&offset=${offset}&limit=${limit}&tokenAddress=0xd129ce9c8cc5ad4d254ac3438895ed31c7a1b5ef`;
    await axios.get(uri).then((data) => {
      fs.writeFileSync(`./module/json-to-csv/okex-transaction${i}-23-03-22.json`, JSON.stringify(data.data.data.hits));
    }).catch(error => {
      console.log(error)
    })
    offset = offset + limit;
  }
})();