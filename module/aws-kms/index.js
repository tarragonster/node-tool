import AWS from "../../config/aws.js";

const KMS = new AWS.KMS();

async function encrypt(rawPrivateKey) {
  const KeyId = process.env.AWS_ENCRYPTION_KEY_ID;
  const EncryptionAlgorithm = 'RSAES_OAEP_SHA_256';
  const encryptedData = await KMS.encrypt({
    KeyId,
    EncryptionAlgorithm,
    Plaintext: rawPrivateKey,
  }).promise();

  console.log({
    'privateKeyEncryptedValue': encryptedData.CiphertextBlob.toString('hex'),
    'privateKeyEncryptionKey': encryptedData.KeyId,
    'privateKeyEncryptionAlgorithm': encryptedData.EncryptionAlgorithm,
  });
}

async function decrypt(encryptedData) {
  const KeyId = process.env.AWS_ENCRYPTION_KEY_ID;
  const decryptedData = await KMS.decrypt({
    EncryptionAlgorithm: 'RSAES_OAEP_SHA_256',
    KeyId,
    CiphertextBlob: Buffer.from(encryptedData, 'hex'),
  }).promise();
  console.log(decryptedData.Plaintext.toString());
}

async function main() {
  // await encrypt("abc")
  // await decrypt("abc")
}

main(); //node module/aws-kms/index.js