const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/post');
const app = express();
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/my-blog');

const db = mongoose.connection;
db.on('error', console.log);
db.once('open', () => {
  let post = new Post({ title: 'New World' });
  post.save(function(err) {
    if (err) console.log(err);
  })
  console.log('success!');
});

app.get('/posts', (req, res) => {
  Post.find().sort({'createdAt': -1}).exec(function(err, posts) {
    if (err) return res.status(500).json({error: err.message});
    res.json({ posts });
  })
})

app.listen(3000, () => {
  console.log('running on port 3000...');
})