"use strict"

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.all('/*', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html>
      <head>
        <title>MEAN To-Do App</title>
        <body>
          <h1>Hello World</h1>
          <script src="bundle.js"></script>
        </body>
      </head>
    </html>
    `);
});

app.listen(PORT, () =>{
  console.log(`Server running on PORT ${PORT}`);
});
