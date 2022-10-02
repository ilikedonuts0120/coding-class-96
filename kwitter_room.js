
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

    document.getElementById("user_name").innerHTML = "Welcome " +user_name+ "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom (){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName (name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}