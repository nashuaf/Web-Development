
# Is it a good day to fly a kite?

My application tells users if it's a good day to fly a kite or not. The criteria for this are that it is warm enough out (over 70 degrees Fahrenheit) and windy enough (at least 10 mp/h of wind). I get this data from the weatherbit API, interacting with it through a GET request from axios which contains the location data of the user.


## Running the Application

To run the app, follow these steps in this order:

1. Download the folder
2. Change directory into the folder
- If you have node already installed,\
as well as express, axios, and nodemon, \
you can go to step 4
3. Install node.js globally
4. Run ``run npm i express``
5. Run ``sudo npm i -g nodemon``
6. Run ``npm install axios``
7. Run ``nodemon express_server/index.js``