// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

'use strict';

const functions = require('firebase-functions');
const {
  dialogflow,
  SimpleResponse,

} = require('actions-on-google');


// Creates a Dialogflow App instance
const app = dialogflow({
  debug: true,
});

app.intent('Default Welcome Intent', (conv) => {
    conv.ask('Hi, how is it going?')
    // conv.ask(conv);
    // conv.ask(new SimpleResponse({
    //     speech: "Simple response worked",
    //     text: "Simple response worked",
    // }));
})








// The entry point to handle a http request
exports.factsAboutGoogle = functions.https.onRequest(app);
