const Campaigns = require('../models/CampaignsSchema')
const express = require('express')
const {
  getCampaigns,
  createCampaigns,
  deleteCampaigns,
} = require('../controllers/campaign')

const router = express.Router()

router.route('/').get(getCampaigns).post(createCampaigns)
router.route('/:id').delete(deleteCampaigns)

module.exports = router
