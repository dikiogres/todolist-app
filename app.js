const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items = [
    "Study",
    "Work",
    "Study"
];

app.get('/', (req, res) => {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day, 
        newListItems: items
    })
    //res.send('Hola');
});

app.post("/", (req, res)=> {
   var item= req.body.newItem;

   items.push(item);

    res.redirect("/");
})


app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});