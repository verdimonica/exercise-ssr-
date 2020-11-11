// REQUIRE PACKAGES
const express = require("express");
const erv = require('express-react-views');

// CREATE THE SERVER
const app = express();


// SET THE VIEW ENGINE
// Set the folder containing the view/templates `.jsx` files
app.set('views', __dirname + '/views');
// Set `express-react-views` as the view engine use for rendering HTML
app.set('view engine', 'jsx');
app.engine('jsx',  erv.createEngine() );


// MIDDLEWARE
app.use( express.static('public') );


app.get('/About', (req, res, next) => {
  

  res.render('About')

})

// START THE SERVER
app.listen( 3000, () => {
  console.log("Server is listening on the port 3000");
});
