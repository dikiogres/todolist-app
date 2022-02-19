const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day
    })
    //res.send('Hola');
});


app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});