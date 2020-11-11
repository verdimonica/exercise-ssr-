const React = require('react');


function Home () {
  return(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> Home </title>
        <link rel="stylesheet" href="stylesheets/style.css" />
      </head>
      <body>
        <h1 className="title" > Ironhackers Be Like</h1>
        <img src="https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif" alt=""/>
      </body>
    </html>

  )
}

// JSX syntax rules
// 1. Self closing tags must have a slash at the end:  img , link , br, meta
// 2. Some attribute names are slightly different than HTML:  className, charSet
// 3. HTML returned from the function must have 1 main enclosing element. Other
//      elements can be nested inside


module.exports = Home;