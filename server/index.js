const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/my-blog');

let db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!');
});

app.get('/users/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.json(user);
  })
})

app.listen(3000, function() {
  console.log('running on port 3000...');
})