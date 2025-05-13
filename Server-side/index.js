const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json()); 


const data = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "phone": "+1-555-123-4567"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example.com",
    "phone": "+1-555-987-6543"
  },
  {
    "id": 3,
    "name": "Clara Lee",
    "email": "clara.lee@example.com",
    "phone": "+1-555-222-3333"
  },
  {
    "id": 4,
    "name": "David Patel",
    "email": "david.patel@example.com",
    "phone": "+1-555-444-5555"
  },
  {
    "id": 5,
    "name": "Emma Thompson",
    "email": "emma.thompson@example.com",
    "phone": "+1-555-666-7777"
  }
]

app.get('/user',(req,res)=>{
    res.send(data)
})
app.post('/user',(req,res)=>{
 
    const newUser = req.body
    newUser.id = data.length + 1
    data.push(newUser);
    res.send(newUser)

})


 
app.listen(port)