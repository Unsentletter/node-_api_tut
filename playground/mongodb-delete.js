
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

db.collection('Users').deleteMany({name: 'Tritan'}).then((result) => {
  console.log(result);
});

db.collection('Users').findOneAndDelete({
  _id: new ObjectID(`582264b25ab7a30de0471a3a`)
}).then((result) => {
  console.log(result);
});


//deleteMany
// db.collection('ToDos').deleteMany({text: 'get sexy'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('ToDos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('ToDos').findOneAndDelete({completed: false}).then((results) => {
//   console.log(result);
// });
  // db.close();
});
