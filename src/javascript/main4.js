const messaging = firebase.messaging();
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'BBfBMbJbeIlfMz47MqT2iJDLHGwLsUOVv2EM8-T7BZJLKKSlpxV_1Ip0tZwO364FBenSPTBXgxuW7HpwzAVYTfg' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
