

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
 apiKey: "AIzaSyCFomGDg4THfoyft8QBmb5OMq-BcOaqSJw",
  authDomain: "chat-app-fec09.firebaseapp.com",
  databaseURL: "https://chat-app-fec09-default-rtdb.firebaseio.com",
  projectId: "chat-app-fec09",
  storageBucket: "chat-app-fec09.appspot.com",
  messagingSenderId: "282521235",
  appId: "1:282521235:web:4744f3870b2760a6446766",
  measurementId: "G-7B94F1ZZTF",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();