
 const request= require('request')
const geolocation=(country,callback)=>
{
  const url1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+country+'.json?access_token=pk.eyJ1IjoiamFnYWRpc2gxIiwiYSI6ImNrOWI1eWh4bTBicDczZWxxNXYzcjU3ZjkifQ.nMcDlRkNPdPVT7Mns8l1zA&limit=1'
 //const url1 ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFnYWRpc2gxIiwiYSI6ImNrOWI1eWh4bTBicDczZWxxNXYzcjU3ZjkifQ.nMcDlRkNPdPVT7Mns8l1zA&limit=1"; 
  request({url : url1,json:true},(error,response)=>
   {
     if(error)
     {
       console.log("check your network connection")
     }
     else if(response.body.features.length==0)
     {

      console.log("features length not defined")
     }
     else{
       callback(undefined,{
          longitude : response.body.features[0].center[0],
          latitude : response.body.features[0].center[1],
          place :response.body.features[0].place_name
       })
     
     }
    
   })

}


module.exports=geolocation