import * as exps from 'express';
import * as bodypar from 'body-parser';

const app = exps();
const port = 3000;

app.use(bodypar.urlencoded({ extended: true }));
app.use(bodypar.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
});



const employeeslist = [
 { "id": 1, "name": "Anand"},
 { "id": 2, "name": "kumar"},
 { "id": 3, "name": "rajshekhar"}
]


app.get('/employees', (req, res) => { 
  res.send(employeeslist);
});

app.post('/employee',(req, res) => {
  employeeslist.push({ "id": employeeslist.length + 1, "name": req.body.name});
  res.send(employeeslist);
});

app.delete('/employee/:id',(req, res) => {
 const id = req.params.id;
 for (var i = 0; i < employeeslist.length; i++) {
    var obj = employeeslist[i];
    if (obj["id"] == id) {
     employeeslist.splice(i, 1);
 }
}
  res.send(employeeslist);
});

app.put('/employee',(req, res) => {
  employeeslist[req.body.id] = req.body;
  res.send(employeeslist);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

