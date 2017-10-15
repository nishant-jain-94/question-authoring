const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8081);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log(`Polymer app listening on ${app.get('port')}`);
});