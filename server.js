const express = require('express')
const PORT = 8080 || process.env.PORT
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`))
