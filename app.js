let express = require('express')
let app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

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
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})