import AWS from "../../config/aws.js";

//standard
const sqs = new AWS.SQS(); // sqs tutorial https://stackabuse.com/message-queueing-in-node-js-with-aws-sqs/
const queueUrl = "https://sqs.us-east-1.amazonaws.com/548704797418/huuk-dev-market";

const orderData = {
  'userEmail': 'userMail',
  'itemName': 'itemName',
  'itemPrice': '1000',
  'itemsQuantity': '1',
}

const sqsOrderData = {
  MessageAttributes: {
    "userEmail": {
      DataType: "String",
      StringValue: orderData.userEmail
    },
    "itemName": {
      DataType: "String",
      StringValue: orderData.itemName
    },
    "itemPrice": {
      DataType: "Number",
      StringValue: orderData.itemPrice
    },
    "itemsQuantity": {
      DataType: "Number",
      StringValue: orderData.itemsQuantity
    }
  },
  MessageBody: JSON.stringify(orderData),
  // MessageDeduplicationId: orderData.userEmail, // Required for FIFO queues
  // MessageGroupId: "UserOrders", // Required for FIFO queues
  QueueUrl: queueUrl
};

// Send the order data to the SQS queue
const sendSqsMessage = sqs.sendMessage(sqsOrderData).promise();

function sqsSender() {
  sendSqsMessage.then((data) => {
    console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);
    console.log("Thank you for your order");
  }).catch((err) => {
    console.log(`OrdersSvc | ERROR: ${err}`);
    console.log("We ran into an error. Please try again.");
  });
}

function main() {
  sqsSender()
}

main(); //node module/aws-sqs/sendStandard.js