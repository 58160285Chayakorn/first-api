const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let students = [
    {
        id: 1, name: 'Chayakorn', u: 'buu', year: 2001, faculty: 'IT'
    },

    {
        id: 2, name: 'Fill', u: 'tu', year: 1999, faculty: 'com-sci'
    }

]


app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

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

app.get('/students', (req, res) => {
    res.status(201).json(students)
})

app.get('/students/:id', (req, res) => {
     let id = req.params.id

    if(!id || isNaN(id)){
        res.status(400).json({ error_massage: 'This api required `id` parameter'})
        return 
    }
    res.json(students[req.params.id - 1])
})

app.post('/students', (req, res)=> {
    let student = req.body
    student.id = students.length + 1
    students.push(student)
    res.status(201).json(student)
})



module.exports = app
