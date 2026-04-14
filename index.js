const express = require('express')

const app = express()

app.get('/', (req, res) => {
res.send("Backend HOME page is RUNNING...")
})

app.listen(5000, () => {
console.log("Backend running on : http://localhost:5000")
})
