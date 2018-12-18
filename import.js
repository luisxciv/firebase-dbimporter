
const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./service-key.json");
const data = require("./data.json");

//we initialize the admin sdk

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://YOUR_DB.firebaseio.com"
});

//credentials — property will be filled by just created service account key
//
// databaseURL — is the name of your Database instance + firebaseio.com


