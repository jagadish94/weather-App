console.log("client side app.js")

fetch('http://puzzle.mead.io/puzzle').then((response)=>
{
  response.json().then((data)=>
  {
     console.log(data)
  })


})


const form1=document.querySelector('form')
const searchvalue= document.querySelector('input')
const message1=document.querySelector('#message1')
const message2 = document.querySelector('#message2');


form1.addEventListener("submit", function(e){
    e.preventDefault();
   // document.getElementById("demo").innerHTML = "Hello World";
   
   console.log(searchvalue.value)
   var country='Boston';
fetch('http://localhost:3000/weather?address='+searchvalue.value).then((response)=>{
response.json().then((data)=>{
  console.log(data)
  if(data.error)
  {
    console.log(data.error)
  }
  else{
      message1.innerHTML=data.location;
      message2.innerHTML= data.pressure;
  console.log(data.location)
  }

})

})
  });
