const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

const items = [
    "Study",
    "Work",
    "Study"
];

const workItems = [];

app.get('/', (req, res) => {

    let day = date.getDate();

    res.render("list", {
        listTitle: day, 
        newListItems: items
    })
    //res.send('Hola');
});

app.post("/", (req, res)=> {

    let item= req.body.newItem;

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
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});