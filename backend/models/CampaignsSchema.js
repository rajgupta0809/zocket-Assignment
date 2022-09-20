const mongoose = require('mongoose')

const campaignSchema = mongoose.Schema({
  name: { type: String, required: true },
  sdate: { type: Date, required: true },
  edate: { type: Date, required: true },
  budget: { type: Number, required: true },
  location: { type: String, required: true },
  platform: { type: String, required: true },
  status: {
    type: String,
    enum: ['Live now', 'Paused', 'Exhausted'],
    required: true,
  },
})

module.exports = mongoose.model('Campaign', campaignSchema)
