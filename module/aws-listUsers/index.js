import AWS from "../../config/aws.js";

const iam = new AWS.IAM();
const params = {};

function listUsers() {
  iam.listUsers(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

function main() {
  listUsers()
}

main(); //node module/aws-listUsers/index.js