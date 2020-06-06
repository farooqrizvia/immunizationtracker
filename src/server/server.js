const express = require('express');
const path = require('path')
const pug = require('pug')
var bodyParser = require('body-parser')
var login = require('./common/login');

const app = express();


app.set('view engine', 'pug');
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../pug/pages')
const htmlDirPath = path.join(__dirname, '../public/html')

app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('login', {error:false});
});


app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/index', (req, res) => {
  const username = req.body.inputEmailAddress
  const password = req.body.inputPassword
  const role = req.body.userRole
  let loginResult = login(username, password);
  if (loginResult) {
      if(role=='user')
        res.sendFile(htmlDirPath + '/user-dashboard.html');
      else
        res.sendFile(htmlDirPath + '/hc-dashboard.html');
  }else{
    res.render('login', { error: true });
  }

});

app.get('/password', (req, res) => {
  res.sendFile(viewsPath + '/password.html');
});


app.listen(3000, () => {
  console.log('Listening on port 3000...');
});