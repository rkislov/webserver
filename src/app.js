const path = require("path");
const express = require("express");
const hbs = require('hbs')

const app = express();

// Difen paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname,"../templates");

//Setip Handlebars engine and Views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req,res)=>{
  res.render('index', {
    title: 'Weather App',
    name: 'Roman Kislov'
  })
})
app.get('/about', (req,res)=>{
  res.render('about', {
    title: 'About Me',
    name: 'Roman Kislov'
  })
})
app.get('/help', (req,res)=>{
  res.render('help', {
    title: 'Help Page',
    name: "roman Kislov",
    message: 'Help message'
  })
})
app.get("/weather", (req, res) => {
  res.send({
    forecast: "it is snowing",
    location: "Philadelphia"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
