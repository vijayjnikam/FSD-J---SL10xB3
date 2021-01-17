"use strict";
exports.__esModule = true;
var exps = require("express");
var bodypar = require("body-parser");
var app = exps();
var port = 3000;
app.use(bodypar.urlencoded({ extended: true }));
app.use(bodypar.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var employeeslist = [
    { "id": 1, "name": "Anand" },
    { "id": 2, "name": "kumar" },
    { "id": 3, "name": "rajshekhar" }
];
app.get('/employees', function (req, res) {
    res.send(employeeslist);
});
app.post('/employee', function (req, res) {
    employeeslist.push({ "id": employeeslist.length + 1, "name": req.body.name });
    res.send(employeeslist);
});
app["delete"]('/employee/:id', function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < employeeslist.length; i++) {
        var obj = employeeslist[i];
        if (obj["id"] == id) {
            employeeslist.splice(i, 1);
        }
    }
    res.send(employeeslist);
});
app.put('/employee', function (req, res) {
    employeeslist[req.body.id] = req.body;
    res.send(employeeslist);
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
