const express = require('express')

const app = express()

app.get('/', (req, res) => {
res.send("Backend HOME page is RUNNING...")
})

app.get('/api/test',(req,res) => {
  res.json({
    message: "Hello message from backend....",
    status:"success"
  })
})

app.listen(5000,'0.0.0.0', () => {
console.log("Backend running on port : 5000")
})
 