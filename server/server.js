const express = require('express')
const app = express()
const PORT = process.env.PORT || 1003
app.get('/', (req, res) => {
    res.send("Hello world!!")
})

app.listen(PORT, () => console.log(`server running on ${PORT}`))