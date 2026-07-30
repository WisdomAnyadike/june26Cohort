 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBba9d_pxlQWKiOPeXBwMjv8nBFGgGK69A",
    authDomain: "june-cohort-app.firebaseapp.com",
    projectId: "june-cohort-app",
    storageBucket: "june-cohort-app.firebasestorage.app",
    messagingSenderId: "526383905476",
    appId: "1:526383905476:web:4b47063795c6ff8d27a791",
    databaseURL: "https://june-cohort-app-default-rtdb.firebaseio.com"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  let chatIndex 

function logUserOut(params) { 
    let canLogout = confirm('are you sure?')

    if (canLogout) {
    firebase.auth().signOut().then(() => {
        alert('logout successful')
        window.location.href = 'login.html'
     }).catch((error) => {
    alert(error.message)
    }); 
    }

}

function authenticateUser(params) {
    document.getElementById('sendButton').innerHTML = 'Loading..'
    document.getElementById('sendButton').disabled = true


    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    let userName = document.querySelector('.user-name')
    let avatarValue = document.querySelector('.avatar')

    console.log(user);
    
    userName.innerHTML = user.displayName
    avatarValue.innerHTML = user.displayName.split(' ')[0][0].toUpperCase() + user.displayName.split(' ')[1][0].toUpperCase()
 document.getElementById('sendButton').innerHTML = 'Send'
    document.getElementById('sendButton').disabled = false
  } else {
    window.location.href = 'login.html'
  }
});
    
}


authenticateUser()


// our text container





// for loading 

 // <div class="msg" id="typingRow">
     //   <div class="avatar c5">NE</div>
       // <div class="msg-body">
   //       <p class="typing">
  //          <i></i><i></i><i></i>
   //         <span id="typingText">Ngozi is typing</span>
    //      </p>
     //   </div>
   //   </div>



   function sendMssg() {
   let messageValue = document.getElementById('messageInput').value.trim()

    if (!chatIndex && chatIndex !== 0 ) {
    alert(' couldnt send message , please try again later ')
    } else if(!messageValue){
        alert('please enter a message')
    } else {

  database.ref(`chats/${chatIndex}`).set({
    sender: auth.currentUser.displayName ,
    message : messageValue ,
    time : new Date().toTimeString() , 
    isDeleted : false ,
    avatar : auth.currentUser.displayName.split(' ')[0][0].toUpperCase() + auth.currentUser.displayName.split(' ')[1][0].toUpperCase()
  }).then(()=> {

  }).catch(()=> {
   alert('couldnt send message')
  })

    }


    document.getElementById('messageInput').value = ''
 
    
   }



   function displayChats() {
     document.getElementById('messages').innerHTML =  'Loading...'



    database.ref('chats').on('value', (snapshot) => {
  const data = snapshot.val() || [];
  chatIndex = data.length

 document.getElementById('messages').innerHTML =  ''

 if (data.length === 0 ) {
    document.getElementById('messages').innerHTML =   'No messages available'
 } else {
 data.forEach((chat , i , arr) => {
    let isMyMessage = chat.sender === auth.currentUser.displayName


      document.getElementById('messages').innerHTML +=  ` <div ondblclick="deleteMssg(${isMyMessage} , ${i})" class="msg ${isMyMessage ? 'mine' : ''} ">
          <div class="avatar c3"> ${chat.avatar} </div>
          <div class="msg-body">
            <p class="msg-meta">
              <span class="msg-name">${chat.sender}</span>
              <span class="msg-time">${chat.time}</span>
            </p>
            <div class="bubble">
             ${ chat.isDeleted ? '<i > This message has been deleted </i> '  : chat.message}
            </div>
          </div>
        </div>`
  });
 }

 

  

});
    
   }

   displayChats()


   function deleteMssg(isMine , index) {

    if (!isMine) {
        alert('you cant delete this message')
        return
    }


    let canDelete = confirm('are you sure you want to delete this message?')

    if (canDelete) {
         database.ref(`chats/${index}`).update({
    isDeleted : true ,
  }).then(()=> {
  }).catch(()=> {
   alert('couldnt send message')
  })

        
    } 


    
   }