"use strict"

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.all('/*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>MEAN To-Do App</title>
        <base href="/">
        </head>
        <body>
          <div ui-view></div>
          <script src="bundle.js"></script>
        </body>
    </html>
    `);
});

app.listen(PORT, () =>{
  console.log(`Server running on PORT ${PORT}`);
});
