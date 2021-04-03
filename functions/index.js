const functions = require("firebase-functions");
const axios = require("axios");

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

exports.api = functions.https.onRequest(async (req,res)=>{
    switch(req.method){
        case 'GET':
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            res.send(response.data);
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


exports.userAdded = functions.auth.user().onCreate(user =>{
    console.log(`${user.email} is created`)
    return Promise.resolve()
})


exports.userDeleted = functions.auth.user().onDelete(user =>{
    console.log(`${user.email} is deleted`)
    return Promise.resolve()
})