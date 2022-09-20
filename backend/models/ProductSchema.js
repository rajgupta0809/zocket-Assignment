const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  img: { type: String, required: true },
})

module.exports = mongoose.model('Product', productSchema)
