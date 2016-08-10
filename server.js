const fs = require('fs');
const express = require('express');
const app = express();
const Sequelize = require('sequelize');

var sequelize = new Sequelize('programmerdata', 'htmlint', 'f', {
  host: 'localhost',
  dialect: 'postgres',
});

var pgrData = sequelize.define('testdata', {
  CityPopulation: {
    type: Sequelize.STRING,
    allowNull: true,
    primaryKey: true
  }
})
/*pgrData.sync({force: true}).then(function () {
  return pgrData.create({});
});*/

app.use(express.static('public'))

app.get('/api/stuff', (req, res) => {
  sequelize.query('SELECT * FROM "testdata"', {type: sequelize.QueryTypes.SELECT})
    .then(function(err, data){
      res.json(data)
    })
});

app.listen(4000, () => {
  console.log('server restarted...')
});