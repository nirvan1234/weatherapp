const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;


const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");



app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));



//app.use(express.static(path.join(__dirname , "../public")));

//app.get( "/", (req,res) =>{

   //res.render("index");
//})




app.get( "/", (req,res)=> {
    res.render("index");
});

app.get( "/about", (req,res)=> {
   res.render("about");
});


app.get( "/weather", (req,res)=> {
    res.render("Weather");
});
app.get( "*", (req,res)=> {
    res.render("Error 404");
});


app.listen(port, ()=> {
   console.log(`listenig the port at ${port}`);
});