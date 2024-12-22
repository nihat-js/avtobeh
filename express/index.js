const express = require('express')

const app = express()




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})
app.get('/bye', (req, res) => {
    res.send('Goodbye World!')
})

app.get('/about', (req, res) => {
    res.send('About World!')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
