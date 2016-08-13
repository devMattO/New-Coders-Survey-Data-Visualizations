const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/api/stuff', (req, res) => {
  res.json({ stuff : 'stuff' });
});

app.listen(4000, () => {
  console.log('server restarted...')
});