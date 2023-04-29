
//Agrega las credenciales de firebase:
var firebaseConfig = {
  apiKey: "AIzaSyDhbIw49UOrcwRDLvKCjhF_ao_y4UDqUg4",
  authDomain: "kwitter2-13622.firebaseapp.com",
  databaseURL: "https://kwitter2-13622-default-rtdb.firebaseio.com",
  projectId: "kwitter2-13622",
  storageBucket: "kwitter2-13622.appspot.com",
  messagingSenderId: "243262469700",
  appId: "1:243262469700:web:fd34bbc011f0744bf2ee11"
};


firebase.initializeApp(firebaseConfig);




user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");



document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



function addRoom() {
   room_name = document.getElementById("room_name").value;
 
   firebase.database().ref("/").child(room_name).update({
     purpose: "adding room name"
   });
 
   localStorage.setItem("room_name", room_name);

   window.location.replace("kwitter_page.html");
 
 }



function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;



   console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;


   });});}



getRoom();




function redirectToRoomName(Room_names) {
console.log(Room_names);
localStorage.setItem("room_name", Room_names);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

