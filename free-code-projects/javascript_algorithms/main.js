require('dotenv').config()

const   express = require('express'),
        app = express(),
        path = require('path'),
        cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname + '/public')))
app.use(express.urlencoded({extended:false}))

app.get('', (req, res) => {
    res.send('index')
})

app.listen(process.env.PORT, () => console.log(process.env.PORT))