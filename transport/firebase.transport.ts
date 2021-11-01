const firebaseAdmin = require("firebase-admin");
const serviceAccount = require('../serviceacount.json')

export const admin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://twitter-bot-2937d.firebaseio.com"
});

