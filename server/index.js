const express = require('express')
const app = express()

app.get('/greeting', (req, res) => {
    let lang = {
        en: 'hello',
        th: 'สวัสดี'
    }


    let l = req.query.lang
    if(!l){
        res.json({ message: 'Hello'})
    }else{
        res.json({ message: lang[l]})
    }

    



})



module.exports = app
