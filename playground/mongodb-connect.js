// const MongoClient = require('mongodb').MongoClient;
// line 1 is equal to line 3, but has been destructured
// const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Conected to MongoDB server');

  // db.collection('ToDos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert today', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name: 'Tritan',
  //   age: 69,
  //   location: 'mums house'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert to db', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  db.close();
});
