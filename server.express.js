const express = require('express')
const app = express()
const port = 3000

// Start server on port 3000
app.listen(port, () => console.log(`Listening on port ${port}!`))

app.use('/', express.static('public/index.html'))
app.use('/new', express.static('public/new.html'))
app.use('/about', express.static('public/about.html'))

app.use(express.static('public'))

app.post('/submit', function (req, res) {
    let dataString = ''

    req.on( 'data', function( data ) {
        dataString += data 
    })
  
    req.on( 'end', function() {
      console.log( JSON.parse( dataString ) )
    })
    res.send('Got a POST request')
  })

app.use(express.urlencoded())
app.post('/submit-form', (req, res) => {
    console.log('Got a POST from submit-form')
    const username = req.body
    console.log( username )
    res.send({redirect: '/blog'});
})
