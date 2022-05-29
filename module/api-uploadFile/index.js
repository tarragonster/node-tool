import fs from 'fs'
import path from 'path'
const __dirname = path.resolve();

async function apiUploadFile(image) {
  const timestamp = Math.floor(Date.now()/1000); // for naming
  const base64Data = image.url.replace(`data:${image.type};base64,`, '') // for saving image
  fs.writeFile(
    `${path.join(__dirname, `/api-uploadFile/${timestamp}-${image.name}`)}`, // write file to this path
    base64Data,
    'base64',
    function(err) {
    console.log(err); // on error
  });
}

export default apiUploadFile