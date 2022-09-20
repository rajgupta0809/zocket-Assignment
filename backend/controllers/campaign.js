const Campaigns = require('../models/CampaignsSchema')

//@desc     Fetch all campaigns
//@routes   GET /api/campaigns
//@access   PUBLIC
const getCampaigns = async (req, res) => {
  try {
    const campaign = await Campaigns.find({})
    res.json(campaign)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

//@desc     Create campaigns
//@routes   POST /api/campaigns
//@access   PUBLIC
const createCampaigns = async (req, res) => {
  let { name, sdate, edate, location, platform, status, budget } = req.body

  try {
    const campaign = new Campaigns({
      name,
      sdate,
      edate,
      location,
      platform,
      status,
      budget,
    })

    const createdCampaign = await campaign.save()
    res.status(201).json(createdCampaign)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

//@desc     Delete campaigns
//@routes   DELETE /api/campaigns/:id
//@access   PUBLIC
const deleteCampaigns = async (req, res) => {
  try {
    const campaign = await Campaigns.findById(req.params.id)
    if (campaign) {
      await campaign.remove()
      res.json({ message: 'Campaign removed' })
    } else {
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  } catch (error) {}
}

module.exports = { getCampaigns, createCampaigns, deleteCampaigns }
