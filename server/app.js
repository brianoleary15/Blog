const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully.'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
  {id: '1',
    title: 'First post',
    content: 'From server'},
    {id: '2',
      title: 'Second post',
      content: 'From server!'}
  ];
  res.status(200).json({
    message: 'Sent',
    posts: posts
  });
});



module.exports = app;
