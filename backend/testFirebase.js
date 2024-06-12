// testFirebase.js
const admin = require('./firebaseConfig'); // Correct path to your firebaseConfig.js file

async function testFirebase() {
  try {
    // Access the Realtime Database
    const db = admin.database();

    // Access a reference to a node in the database (replace 'test' with your desired node)
    const ref = db.ref('test');

    // Fetch data from the database once using the 'value' event type
    const snapshot = await ref.once('value');

    // Log the fetched data
    console.log('Firebase connection successful:');
    console.log(snapshot.val());
  } catch (error) {
    console.error('Error connecting to Firebase:', error);
  } finally {
    // Always do cleanup, like closing connections, if necessary
    admin.app().delete(); // Close Firebase Admin SDK connection
  }
}

// Call the function to test the connection
testFirebase();
