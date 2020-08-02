const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes')
const PORT = 8080 || process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(routes)

app.use((req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/postsDB', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`))
