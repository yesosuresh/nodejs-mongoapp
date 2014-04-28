var databaseUrl = "nodedb"; // "username:password@example.com/mydb"
var collections = ["users", "reports"]
var db = require("mongojs").connect(databaseUrl, collections);

db.users.find({sex: "male"}, function(err, users) {
  if( err || !users) console.log("No female users found");
  else users.forEach( function(femaleUser) {
    console.log(femaleUser);
  } );
});

db.users.save({email: "suresh1@gmail.com", password: "iLoveMongo1", sex: "male"}, function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("User saved");
});

db.users.update({email: "suresh1@gmail.com"}, {$set: {password: "iReallyLoveMongo"}}, function(err, updated) {
  if( err || !updated ) console.log("User not updated");
  else console.log("User updated");
});
