const express=require('express');
const app=express();
const port=process.env.PORT || 8000
const path =require('path');
const hbs=require('hbs');

const static_web=path.join( __dirname,"../views");

// app.use(express.static(static_web));

app.set('views', '../views')
app.set('view engine','hbs');
// hbs.registerPartials(static_web);

app.get("/",(req,res)=>{
  res.render('index.hbs');
})
app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
  })
  app.get("/about",(req,res)=>{
    res.render("about.hbs");
  })

  app.get("*",(req,res)=>{
    res.render("404error.hbs");
  })
   

app.listen(port,(err)=>{
    console.log(` successful login ${port}`);
})