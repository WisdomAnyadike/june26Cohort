console.log(firebase);
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


  function signUserUp() {
    let emailValue = email.value.trim()
    let passwordValue =  password.value.trim()
    let firstNameValue = firstName.value.trim()
    let lastNameValue = lastName.value.trim()
    let confirmPasswordValue = confirmPassword.value.trim()
    let termsValue = terms.checked 

    if (!emailValue || !passwordValue || !firstNameValue || !lastNameValue || !confirmPasswordValue){
        alert('all input fields are mandatory')
    }else if ( !termsValue ){
     alert('please agree to keep chat respectful')
    } else if (passwordValue !== confirmPasswordValue){
   alert('passwords must match')
    } else {
firebase.auth().createUserWithEmailAndPassword( emailValue, passwordValue)
  .then((userCredential) => {
   
 var user = userCredential.user;

    user.updateProfile({
  displayName:  `${firstNameValue} ${lastNameValue}`,
  }).then(() => {
    alert('User created successfully')
    window.location.href = 'login.html'
   }).catch((error) => {
  alert('User created successfully but failed to updated display name')
   window.location.href = 'login.html'
   });  


    
  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
console.log(errorMessage);

  });

        
    } 
  }



//   fetch('https://shjkzsz.com').then((res) => res.json()).then((data)=> console.log(data)
//    ).catch((err)=> console.log(err.message) )



// let firebase = {
//     auth : () => {
//         return {
//             createUserWithEmailAndPassword : ( email , password) => {
//      return userCredential
//             }
//         }
//     }

// }





