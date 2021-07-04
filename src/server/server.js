var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var PORT = process.env.PORT || 3000;

var app = express();
var mysql = require('mysql');
var alert = require('alert');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello from Server!');
})

/*Create New Support*/
app.post('/enroll', function(req, res) {
    console.log(req.body);
    res.status(200).send({message: "Data Received!"});

    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var con = mysql.createConnection({
        host: "localhost",
        user: "testing",
        password: "Ilovedonuts123",
        database: "support",
        port: 3306
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to Database!");

        var sql = "INSERT INTO support (name, email, message) VALUES ('"+name+"', '"+email+"', '"+message+"')";
        console.log(sql);
        con.query(sql, function(err, result) {
            
            console.log(result);
            
            
            if (err) throw err;
            console.log("Support Ticket Created!");
            alert("Successfully Created a Support Ticket. Please Check in the Queue page!");
        });
    });
});

/* Update Support */   
app.post('/update', function(req, res) {
    console.log(req.body);
    res.status(200).send({message: "Data Received!"});

    var email = req.body.up_email;
    var message = req.body.up_message;

    var con = mysql.createConnection({
        host: "localhost",
        user: "testing",
        password: "Ilovedonuts123",
        database: "support",
        port: 3306
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to Database!");

        var sql = "UPDATE support SET message = '"+message+"' WHERE email = '"+email+"'";
        console.log(sql);
        con.query(sql, function(err, result) {
            
            console.log(result);
            
            
            if (err) throw err;
            console.log("Support Ticket Updated!");
            alert("Successfully Updated a Support Ticket. Please Check in the Queue page!");
        });
    });
});

/* Delete Support */
app.post('/delete', function(req, res) {
    console.log(req.body);
    res.status(200).send({message: "Data Received!"});

    var email = req.body.del_email;
    var name = req.body.del_name;

    var con = mysql.createConnection({
        host: "localhost",
        user: "testing",
        password: "Ilovedonuts123",
        database: "support",
        port: 3306
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to Database!");

        var sql = "DELETE FROM support WHERE email = '"+email+"' AND name = '"+name+"'";
        console.log(sql);
        con.query(sql, function(err, result) {
            
            console.log(result);
            
            
            if (err) throw err;
            console.log("Support Ticket Deleted!");
            alert("Successfully Deleted Support Ticket. Please Check in the Queue page!");
        });
    });
});

/* Fetch Support */
app.get('/fetch', function(req, res) {

    var con = mysql.createConnection({
        host: "localhost",
        user: "testing",
        password: "Ilovedonuts123",
        database: "support",
        port: 3306
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to Database!");

        var sql = "SELECT * FROM support";
        console.log(sql);
        con.query(sql, function(err, result, rows) {
            
            console.log(result);
            
            if (err) {
                throw err;
            } else {
                res.send(result);
                console.log("Successfully Fetched Support Tickets Data(s)!");
            }
        });
    });
});

app.listen(PORT, function() {
    console.log("Server running on localhost:" + PORT);
});
