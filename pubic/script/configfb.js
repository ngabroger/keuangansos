const firebaseConfig = {
    apiKey: "AIzaSyCFmqV407dF7wmvg_UU19d-7wy8CxMhJYc",
    authDomain: "keuangansos.firebaseapp.com",
    databaseURL: "https://keuangansos-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "keuangansos",
    storageBucket: "keuangansos.appspot.com",
    messagingSenderId: "913042674648",
    appId: "1:913042674648:web:9ddc00ec05f6f2a9fbd8ad"
  };
  firebase.initializeApp(firebaseConfig);
firebase.analytics();
var auth = firebase.auth();