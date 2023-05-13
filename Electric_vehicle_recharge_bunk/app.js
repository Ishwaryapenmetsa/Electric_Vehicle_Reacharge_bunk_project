const firebaseConfig = {
    apiKey: "AIzaSyAEPo3lRXOAMj9gyQqsKLJONhzKmRwFzbU",
    authDomain: "electric-vehicle-recharg-461dd.firebaseapp.com",
    databaseURL: "https://electric-vehicle-recharg-461dd-default-rtdb.firebaseio.com",
    projectId: "electric-vehicle-recharg-461dd",
    storageBucket: "electric-vehicle-recharg-461dd.appspot.com",
    messagingSenderId: "852955357450",
    appId: "1:852955357450:web:0f75567301515329c39af3"
  };

  //initialize firebase
 firebase.initializeApp(firebaseConfig);

 var messagesRef = firebase.database().ref('messages');


 document.getElementById('contactForm').addEventListener('submit',submitForm);

 function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var mobile = getInputVal('mobile');
    var email = getInputVal('email');
    var username = getInputVal('username');
    var password = getInputVal('password');
    

    saveMessage(name,mobile,email,username,password);

    document.getElementById('contactForm').reset();
 }

    function getInputVal(id){
        return document.getElementById(id).value;
    }

    function saveMessage(name, mobile , email,username,password){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name:name,
            mobile:mobile,
            email:email,
            username:username,
            password:password,

        });
    }
 
