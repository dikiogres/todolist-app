const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {

    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0 ){
        res.sendFile(__dirname + '/index.html');
        //res.send();
    }else{
        res.send("<h1>Weekdays</h1>");
    }
    //res.send('Hola');
});


app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});