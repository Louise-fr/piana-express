const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
 
const app = express();
 
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    });
});

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

// const http = require('http')
// const fs = require('fs')
// const httpPort = 80

// const indexPath = "./client/public/index.html"

// http.createServer((req, res) => {
//   fs.readFile(indexPath, 'utf-8', (err, content) => {
//     if (err) {
//       console.log('We cannot open "index.htm" file.')
//     }

//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//     })

//     res.end(content)
//   })
// }).listen(httpPort, () => {
//   console.log('Server listening on: http://localhost:%s', httpPort)
// })