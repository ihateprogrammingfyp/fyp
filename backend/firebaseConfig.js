// backend/firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./sheride-fyp-firebase-adminsdk-ndfcp-5279ea14fc.json'); // Adjust the path if necessary

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sheride-fyp-default-rtdb.firebaseio.com/', // Replace with your actual database URL
});

module.exports = admin;
