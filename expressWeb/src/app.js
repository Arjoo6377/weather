const express = require('express');
const hbs=require('hbs');
const port=process.env.PORT || 3000
const path=require('path');
const app = express();
const tempelatePath=path.join(__dirname,"../tempelates")
const partials_path=path.join(__dirname,"../tempelates/partials")
app.use(express.json())
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
hbs.registerPartials(partials_path)
const static_path= path.join(__dirname,"../public")
app.use(express.static(static_path));
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});
 

app.get('/weather', (req, res) => {
  res.render('weather');
});




app.listen(port, () => 
{console.log('Example app is listening on port 3000.')
});