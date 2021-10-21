const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;


app.get('/',(req,res) => {
    res.send('wow,I am excited automatic restart');
});

const users = [
    {id:0,name:'Sabana',email:'sumaiyat610@gmail.com',phone:'01627984977'},
    {id:1,name:'Shorna',email:'shorna610@gmail.com',phone:'01627984977'},
    {id:2,name:'diha',email:'diha610@gmail.com',phone:'01627984977'},
    {id:3,name:'mimi',email:'mimit610@gmail.com',phone:'01627984977'}  ,
     {id:4,name:'Sahana',email:'sahana610@gmail.com',phone:'01627984977'},
     {id:5,name:'sabnur',email:'sabnurt610@gmail.com',phone:'01627984977'},
]

app.get('/users',(req,res) => {
    //use query parameter
    const search = (req.query.search);
    if(search){
       const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
       res.send(searchResult);
    }
     else{
         res.send(users)
     }
});

//app.Method

app.post('/users',(req,res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser)
})

//dynamic api

app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits',(req,res) => {
    res.send(['mango','orange','banana','apple']);
})

app.get('/fruits/mangoes/fazli',(req,res) => {
    res.send('Yummy Yummy tok marka fazil');
})

app.listen(port,() => {
    console.log('listening to port',port);
})