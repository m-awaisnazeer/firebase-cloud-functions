const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.helloworld = functions.https.onRequest((req,res)=>{
    res.send("Hello from firebase functions...");
})

exports.api = functions.https.onRequest((req,res)=>{
    switch(req.method){
        case 'GET':
            res.send('it was GET request');
            break;

        case 'POST':
            const body = req.body
            res.send(body);
            break;

        case 'DELETE':
            res.send('it was DELETE request');
            break;

        default:
            res.send('it was default request');
            break;
    }
})