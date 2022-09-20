const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const productRoutes = require('./routes/product')
const campaignRoutes = require('./routes/campaign')
const path = require('path')

const app = express()
dotenv.config()

connectDB()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/campaigns', campaignRoutes)

if (process.env.MODE === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

//deployment
__dirname = path.resolve()

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
