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

var workItems = [];

app.get('/', (req, res) => {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        listTitle: day, 
        newListItems: items
    })
    //res.send('Hola');
});

app.post("/", (req, res)=> {

    var item= req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);

        res.redirect("/work");
    }else{
        items.push(item);

        res.redirect("/");
    }
})

app.get("/work", (req, res)=> {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    })
})

// app.post("/work", (req, res)=> {
//     var item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});