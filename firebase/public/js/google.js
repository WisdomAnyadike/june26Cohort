
  var provider = new firebase.auth.GoogleAuthProvider();



  function signInWithGoogle(params) {
  document.querySelector('.btn-ghost').innerHTML = 'Loading...'
  document.querySelector('.btn-ghost').disabled = true


    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...

     document.querySelector('.btn-ghost').innerHTML = 'Continue with Google'
       document.querySelector('.btn-ghost').disabled = false
      alert('sign in successful')
      window.location.href = 'dashboard.html'
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    alert(errorMessage)
     document.querySelector('.btn-ghost').innerHTML = 'Continue with Google'
     document.querySelector('.btn-ghost').disabled = false
  });
  }