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


  function logInUser() {
    let emailValue =  email.value.trim()
    let passwordValue =  password.value.trim()

       document.querySelector('.btn-block').innerHTML = 'Loading...'
     document.querySelector('.btn-block').disabled = true


   auth.signInWithEmailAndPassword(emailValue, passwordValue)
  .then((userCredential) => {
    var user = userCredential.user;
    alert('login successful')
    window.location.href = 'dashboard.html'
     document.querySelector('.btn-block').innerHTML = ' Log In'
     document.querySelector('.btn-block').disabled = false
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
       document.querySelector('.btn-block').innerHTML = ' Log In'
     document.querySelector('.btn-block').disabled = false
  });


    
  }



 