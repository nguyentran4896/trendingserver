const express = require('express')
const router = express.Router()
const googleTrends = require('google-trends-api')

router.get('/autoComplete', async (req, res, next) => {
  try {
    const keyword = req.query.keyword || ''
    const data = await googleTrends.autoComplete({
      keyword,
      geo: 'VN',
      hl: 'vi'
    })
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

router.get('/interestOverTime', async (req, res, next) => {
  try {
    const keyword = req.query.keyword || ''
    const data = await googleTrends.interestOverTime({
      keyword
    })
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

router.get('/interestByRegion', async (req, res, next) => {
  try {
    const keyword = req.query.keyword || ''
    const data = await googleTrends.interestByRegion({
      keyword,
      startTime: new Date('2017-02-01'),
      endTime: new Date('2017-02-06'),
      geo: 'VN',
      hl: 'vi'
    })
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

router.get('/relatedQueries', async (req, res, next) => {
  try {
    const keyword = req.query.keyword || ''
    const data = await googleTrends.relatedQueries({
      keyword,
      geo: 'VN',
      hl: 'vi'
    })
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

router.get('/realTimeTrends', async (req, res, next) => {
  try {
    const data = await googleTrends.realTimeTrends({
      category: 'all',
      geo: 'VN',
      hl: 'vi'
    })
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

router.get('/dailyTrends', async (req, res, next) => {
  try {
    const data = await googleTrends.dailyTrends({
      trendDate: new Date('2019-01-10'),
      geo: 'VN',
      hl: 'vi'
    })
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

module.exports = router
