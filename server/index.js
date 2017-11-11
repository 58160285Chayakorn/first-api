const express = require('express')
const app = express()

app.get('/greeting', (req, res) => {
    let lang = {
        en: 'hello',
        th: 'สวัสดี'
    }

    let l = req.query.lang
    if (!l) {
        res.json({ message: 'Hello' })
    } else {
        res.json({ message: lang[l] })
    }

})
   let students = [
{
    id: 1 , name: 'Chayakorn' , u: 'buu' , year: 2001 
} ,

{
    id: 2 , name: 'Fill' , u: 'tu' , year: 1999 
}

    ]
app.get('/students', (req, res) => {
 
res.json(students)
})



module.exports = app
