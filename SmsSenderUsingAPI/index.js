const express = require('express');

const app = express();
const fast2sms = require('fast-two-sms')

require('dotenv').config();


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.post('/sendMessage', async (req, res) => {
   const response = await fast2sms.sendMessage({authorization : process.env.API_KEY, message : req.body.message, numbers : [req.body.number]})
   res.send(response)
})



app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})