import express from 'express';
import ApiUploadFile from './api-uploadFile/index.js'
import cors from 'cors'
import bodyParser from "body-parser";
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true
}))

// parse application/json
app.use(bodyParser.json({
  limit: '50mb'
}))

app.use(cors({
  origin: '*',
  methods: "GET,PUT,POST,DELETE"
}));

app.get('/', function(req, res) {
  res.json({
    msg: `Hello World!`,
  });
});


app.post('/image/upload', async (req, res) => {
  await ApiUploadFile(req.body)
  res.sendStatus(200)
})

app.listen(port , function() {
  console.log(`app listening on port ${port}!`)
});