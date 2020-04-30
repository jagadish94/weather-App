const path = require('path')
const express = require('express')
const hbs= require('hbs')
const request= require('request')
const geolocation =require('./utils/geocode')
const forecast =require('./utils/forecast')

console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname,'../public'))

const app= express()

//Define path foe Express config.
const publicDirPath =path.join(__dirname,'../public');
const viewsPath =path.join(__dirname,'../templates/views')
const partialPath= path.join(__dirname,'../templates/partials')

//set up handle bars engine and views location
app.set('view engine', 'hbs');
app.set('views',viewsPath)// Default path is views in project Folder
hbs.registerPartials(partialPath)

//set up static directory to serve
app.use(express.static(publicDirPath))


app.get('',(req,res)=>{

    res.render('index',{
        'title' :'weather',
        'name'   :"jagadish"
    })
})

app.get('/about',(req,res)=>
{

    res.render('About',{
        'title' :'AboutMe',
        'name' :"jagadish"
    })
})
app.get('help',(req,res)=>{
   res.render('help',{
       'title' :'HelpForm'
   })

})

app.get('/help',(req,res)=>{

    res.send("HomePage")
})

app.get('/about',(req,res)=>
{
    res.send("<h1>Hello</h1>")
})

app.get('/weather',(req,res)=>
{
    const country=req.query.address;
    console.log(req.query)
    if(!req.query.address)
    {
     return res.send("provide a address")

    }
 geolocation(country,(error,data={})=>
 {
  if(error)
  {
    return console.log(data)
  }
  console.log(data)
  forecast(data.latitude,data.longitude,(error,data2)=>{
    console.log(error)
    console.log(data2)
    
    res.send({
        'location' : data.place,
        'pressure'  :data2.pressure,
        'Humidity'  : data2.humidity
    })

    })
   
  
})

  
})


app.get('/product',(req,res)=>
{
    if(!req.query.search)
    {

      return  res.send("please choose product")
    }

    console.log(req.query)
  res.send({
      products: []
  })

  

})
app.listen(3000,()=>
{

     console.log("server is on port 3000")
})





