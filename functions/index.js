const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I6UaCGzo5WLS1I6ZPUhDiV7kR1u51Vnd0oKgxwwVoanE8yz8Mp4uNOMeC7gUXAeNx1R2ncRU0SZ519IkQxKW67G000nDYdvMm"
);
//API

//App config
const app = express();

//Middleware
app.use(cors({ origin: true}));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create')

// listen command
exports.api = functions.https.onRequest(app)


//Example endpoint
//http://localhost:5001/sahara-7331b/us-central1/api