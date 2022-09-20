const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const productRoutes = require('./routes/product')
const campaignRoutes = require('./routes/campaign')

const app = express()
dotenv.config()

connectDB()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/campaigns', campaignRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Zocket.')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
