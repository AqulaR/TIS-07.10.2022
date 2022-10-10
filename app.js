let express = require('express')
let app = express()
let birds = require('./birds');

app.use('/birds', birds);


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
  res.send('about');
});

/////////////
/*
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

app.get(
  '/example/b',
  function (req, res, next) {
    console.log(
      'the response will be sent by the next function ...'
    );
    next();
  },
  function (req, res) {
    res.send('Hello from B!');
  }
);

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};

var cb2 = function (req, res) {
  res.send('Hello from C!');
};

app.get('/example/c', [cb0, cb1, cb2]);
/////////
*/

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.use('/static', express.static('public'))

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

app.get('/user/:id', function (req, res, next) {
  res.render('special')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})