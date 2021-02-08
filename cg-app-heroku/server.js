//Install express server
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');
const path = require('path');
const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// Serve only the static files form the dist directory
app.use(express.static('./dist/cg-app-heroku'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || PORT);

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get('/', (req, res) =>
  res.sendFile('index.html', {root: 'dist/cg-app-heroku/'}),
);

app.post('/api/list-elements',(req, res) => {
  db.add(req.body)
    .then(list => {
      res.status(200).json(list)
    })
    .catch(err => handleError(res,err.message,"The server was unable to add the element"))
    });

app.put('/api/list-elements',(req, res) => {
  db.update(req.body)
    .catch(err => handleError(res,err.message,"The server was unable to update the element"))
    });

app.get('/api/list-elements',(req,res)=>{
  db.getElements()
    .then(elements =>{
      res.status(200).json(elements);
    })
    .catch(err => handleError(res,err.message,"The server was unable to delete the element"))
    });



