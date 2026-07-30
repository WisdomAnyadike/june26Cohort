 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBba9d_pxlQWKiOPeXBwMjv8nBFGgGK69A",
    authDomain: "june-cohort-app.firebaseapp.com",
    projectId: "june-cohort-app",
    storageBucket: "june-cohort-app.firebasestorage.app",
    messagingSenderId: "526383905476",
    appId: "1:526383905476:web:4b47063795c6ff8d27a791"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  function sendResetLink() {
    let emailValue = email.value.trim()

    if (!emailValue) {
        alert('input is mandatory')
    } else {
    document.querySelector('.btn-block').innerHTML  = 'Loading...'
    document.querySelector('.btn-block').disabled  = true

  auth.sendPasswordResetEmail(emailValue)
  .then(() => {
   alert('Reset mail sent successfully')
    document.querySelector('.btn-block').innerHTML  = 'Send reset link'
    document.querySelector('.btn-block').disabled  = false
   })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
        document.querySelector('.btn-block').innerHTML  = 'Send reset link'
      document.querySelector('.btn-block').disabled  = false
      alert(errorMessage)
  });
    }

 
  }