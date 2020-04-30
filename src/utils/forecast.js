const request= require('request')
const forecast =(latitude,longitude,callback)=>{

    const url ='http://api.weatherstack.com/current?access_key=a8e9b63fdeb9ed8221e09e67f9003a93&query='+latitude+","+longitude;
    request({url : url,json:true},(error,response)=>
  {
    if(error)
    {
        console.log("unable TO connect")
        callback("unable to connect",undefined)
  
    }
    else if(response.body.error)
    {
        console.log("unable to find location")
  
    }
    else
    {
      //console.log(response.body.current)
      callback("undefined",response.body.current)
    }
  })
  
  }
  module.exports=forecast