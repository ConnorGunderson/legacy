require('dotenv').config()

const   express = require('express'),
        app = express(),
        path = require('path')



app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname + '/public')))


app.get('', (req, res) => {
    res.send('index')
})


app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})