const request = require('supertest')
const app = require('../server')

describe('GET /students', () => {
    it('should return list of students', (done) => {
        request(app).get('/students').expect(201).then((res)=> {
            let students = res.body
            expect(students instanceof Array).toBeTruthy()
            done()
        })

    })


})