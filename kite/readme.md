
# Is it a good day to fly a kite?

My application tells users if it's a good day to fly a kite or not. The criteria for this are that it is warm enough out (over 70 degrees Fahrenheit) and windy enough (at least 10 mp/h of wind). I get this data from the weatherbit API, interacting with it through a GET request from axios which contains the location data of the user.


## Running the Application

To run the app, follow these steps in this order:

1. Download the folder
2. Change directory into the folder
3. Install node.js globally (If you have node already installed, you can go to step 4. Steps 4 through 8 must be completed though, since the express packages are not in the repository)
4. Run ``npm i express``
5. Run ``sudo npm i -g nodemon``
6. Run ``npm install axios``
7. Run ``nodemon express_server/index.js``
8. Open a browser and go to http://localhost:3000
