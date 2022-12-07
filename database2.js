const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://oakabc:123456Oak@cluster0.xymapjp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
/// Check if database is connected
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   if (!err) console.log("Database is connected !");
//   client.close();
// });

MongoClient.connect("mongodb+srv://oakabc:<password>@cluster0.xymapjp.mongodb.net/", (err, db) => {
  if (err) console.log("connect to database error!!!");
  else console.log("connect Successfully");

  var dbo = db.db("mydb"); /// create mydb database
  // dbo.createCollection("students", (err, res) => {
  //   if (err) console.log("cannot create collection");
  //   else console.log("collection is created");
  //   db.close();
  // });
  // Insert
  var myobj = {name:"Oak", id: "642"};
  dbo.collection("students").insertOne(myobj, (err,res) => {
    if (err) console.log("insert failed");
    else console.log("insert Successfully");

  });
  var myarr = [{name:"Wonyoung", id: "555"},
                {name:"Krittone", id: "666"},
                {address:"Thailand", tel: "191"}
              ];
  dbo.collection("students").insertMany(myarr,(err, res)=>{
    if (err) console.log("insert many failed");
    else console.log("insert many Successfully");

  });
  // Query select * from students limit 1
  dbo.collection("students").findOne({}, (err, res) => {
    console.log("result is " + res);

  });
// Query select * from students
  dbo.collection("students").find({}).toArray( (err, res) => {
    if (!err) console.log("find all result is " + res);

  });
// Query select * from students where name = "Wonyoung"
  var query = { name: "Wonyoung"};
  dbo.collection("students").find(query).toArray((err, res)=>{
    if (!err) console.log(res);
    db.close();
  });

});
