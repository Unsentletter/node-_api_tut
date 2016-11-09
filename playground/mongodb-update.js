
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
//
// db.collection('ToDos').findOneAndUpdate({
//   _id: new ObjectID(`5822890776843feaff1c95ce`)
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID(`5822646828a5120ddc6d9da3`)
}, {
  $set: {
    name: 'Actually Tritan'
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID(`5822646828a5120ddc6d9da3`)
}, {
  $inc: {
    age: +1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
