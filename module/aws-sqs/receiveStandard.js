import AWS from "../../config/aws.js";
import { Consumer } from 'sqs-consumer';

//standard
const sqs = new AWS.SQS(); // sqs tutorial https://stackabuse.com/message-queueing-in-node-js-with-aws-sqs/
const queueUrl = "https://sqs.us-east-1.amazonaws.com/548704797418/huuk-dev-market";

// Create our consumer
const app = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: async (message) => {
    console.log(message);
  },
  sqs: sqs
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

console.log('Emails service is running');
app.start(); // node module/aws-sqs/receiveStandard.js