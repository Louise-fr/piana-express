// Create express app
const cors = require('cors');
const express = require("express")
const app = express()
//const db = require("./database.js")
const bodyParser = require("body-parser");
const gapi = require("./credentials/googleAPIAuth.js")
const helmet = require('helmet')
var compression = require('compression');

var corsOptions = {
    origin: 'www.piana-orsini.fr',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());


// Server port
var HTTP_PORT = 4000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", cors(corsOptions),(req, res, next) => {
    res.json({"message":"online"})
});

app.get("/send-email", cors(corsOptions),(req, res, next) => {
    res.json({"message":"use POST instead"})
});



// Insert here other API endpoints


app.post('/send-email', cors(corsOptions),function (req, res) {
    console.log("Sending emails... ")
    var errors=[]
    if (!req.body.name){
        errors.push("No name specified");
    }
    if (!req.body.to){
        errors.push("No email specified");
    }
    if (!req.body.dates){
        errors.push("No dates specified");
    }
    if (!req.body.message){
        errors.push("No message specified");
    }
    if (!req.body.title){
        errors.push("No title specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }

    //console.log(req.body)

    try {
        gapi.gapiSendMessages(
            req.body.to, 
            req.body.message, 
            req.body.dates, 
            req.body.title, 
            req.body.name
        );
        res.json({"messages":"sent"})
    } catch (error) {
        res.status(400).json({"error":error.join(",")});
    }
});



// Default response for any other request
app.use(function(req, res){
    res.status(404);
});