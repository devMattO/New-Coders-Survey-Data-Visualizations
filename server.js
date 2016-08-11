const fs = require('fs');
const express = require('express');
const app = express();
// const Sequelize = require('sequelize');
const db = require('./models');
const PORT = 4000 || process.env.PORT;

var surveydata = db.surveydata;



/*  MIDDLEWARE  */

// for dev: logs all requests
app.use(function(req, res, next) {
  console.log('method: ',req.method, ' url: ',req.url);
  next();
 });

app.use(express.static('public'));

app.get('/api/stuff', (req, res) => {
  surveydata.findOne({
    where: { NetworkID : '4074a06017' }
  })
    .then(function(data, err){
      // in terminal window
      console.log('data: ', data.dataValues);
      if(err) console.log('error: ', err);
      res.json(data.dataValues);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});