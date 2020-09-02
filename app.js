const express = require ("express");
const https = require("https");
const bodyParser= require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));


// LISTEN /
app.listen (3000, function(){
console.log("server is running on port 3000");

});

// GET
app.get("/", function(req,res){
res.sendFile(__dirname+ "/index.html");

app.post("/",function(req,res){
  console.log(req.body.cityName);

  console.log("post request recieved");

  const query =req.body.cityName;
  
  const apiKey= "5f571d1841d0837f7118638a54cc7ed8";
  const unit="metrics";

    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;


    https.get(url,function(response){
      response.on("data", function (data){
        const Weatherdata =JSON.parse(data);
        const temperature= Weatherdata.main.temp;
  const wdescrip = Weatherdata.weather[0].description;
  const icon = Weatherdata.weather[0].icon;
  imageURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png";




   res.write( "<p> The weather is currently "+wdescrip+"</p>");
  res.write("<h1> The temparature is "+ temperature + "kelvin</h1>")
    res.write("<img src="+imageURL+">" );
   res.send() ;

      });

    });

});




// const query ="london"
// const apiKey= "5f571d1841d0837f7118638a54cc7ed8";
// const unit="metrics";
//
//   const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units+
//
//   https.get(url,function(response){
//     response.on("data", function (data){
//       const Weatherdata =JSON.parse(data);
//       const temperature= Weatherdata.main.temp;
// const wdescrip = Weatherdata.weather[0].description;
// const icon = Weatherdata.weather[0].icon;
// imageURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png";
//
//
//
//
//  res.write( "<p> The weather is currently "+wdescrip+"</p>");
// res.write("<h1> The temparature is "+ temperature + "kelvin</h1>")
//   res.write("<img src="+imageURL+">" );
//  res.send() ;
//
//     });

  // });



});
