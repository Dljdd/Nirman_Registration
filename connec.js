var firebaseConfig = {
  apiKey: "AIzaSyDhtgEsiHW2DpIj8gcrAGigul2r2ere4Ms",
  authDomain: "nirmanregistration-1.firebaseapp.com",
  databaseURL: "https://nirmanregistration-1-default-rtdb.firebaseio.com",
  projectId: "nirmanregistration-1",
  storageBucket: "nirmanregistration-1.appspot.com",
  messagingSenderId: "848978110767",
  appId: "1:848978110767:web:149968a74b8f724db099da"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//initialise firebase

//reference your db
var regisdb=firebase.database().ref('registrations');
function getElementVal(id) {
  return document.getElementById(id).value;
}

// Save form data to Firebase
function saveMessages(teamname, theme, abstract, leadername, Institue, leaderphone, leaderemail, name1, phone1, mail1, name2, phone2, mail2, name3, phone3, mail3, name4, phone4, mail4) {
  var newMessageRef = regisdb.push();
  newMessageRef.set({
      team_name: teamname,
      theme: theme,
      abstract: abstract,
      leader_name: leadername,
      institute: Institue,
      leader_phone: leaderphone,
      leader_email: leaderemail,
      member1: { name: name1, phone: phone1, email: mail1 },
      member2: { name: name2, phone: phone2, email: mail2 },
      member3: { name: name3, phone: phone3, email: mail3 },
      member4: { name: name4, phone: phone4, email: mail4 }
  });
}