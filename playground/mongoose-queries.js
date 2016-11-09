const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = `5822c1308dc523111fda74absd`;
//
// if (!ObjectID.isValid()) {
//   console.log('ID not valid');
// }

// //returns object
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // returns array(preferable, dont have to convert it)
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// // returns array - Use if statement to handle miskey error. Catch is used to catch all other errors
// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


var userid = `5822a6f3b78bdc10a5d80197`;

User.findById(userid).then((user) => {
    if (!user) {
      return console.log('ID not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));
