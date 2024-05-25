import express from "express";
import axios from "axios";
import path from "path";

//Set up express on port 3000
let app = express();
let port = 3000;

//Tell express to use the assets in the folder "public"
app.use(express.static("public"));

//Render the page
app.get("/", async (req,res)=>{
      res.render("index.ejs");
});

//Render the form
app.get('/', (req, res) => {
    res.render('inputForm');
});

//Call to weatherbit API
app.get('/apiCall', (req, res) => {
   const data = req.query.data;
   //Create the API request with the data passed from the user
   let apirequest = "https://api.weatherbit.io/v2.0/current?lat="+ data[0] +"&lon=" + data[1] + "&key=8833d1c30343438499fde83fbb94148d&include=minutely"

   //Perform a GET request to the get the weather
   axios.get(apirequest)
     .then((response) => {
        //Send back the data that we get
        res.send(response.data)
     })
     .catch((err) => {
     console.log(err);
     res.send(err)});


});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
