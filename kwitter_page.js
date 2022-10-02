//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDQfEK_apXPhOBMSJ0V3OuDsYrbKhkf100",
      authDomain: "kwitter-d55a8.firebaseapp.com",
      databaseURL: "https://kwitter-d55a8-default-rtdb.firebaseio.com",
      projectId: "kwitter-d55a8",
      storageBucket: "kwitter-d55a8.appspot.com",
      messagingSenderId: "489835525325",
      appId: "1:489835525325:web:71b3ef6cd7718d8dc2e584"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send (){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
