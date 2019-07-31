const express = require('express')
const router = express.Router()
const googleTrends = require('google-trends-api')
const utils = require('../common/utils')

router.get('/autoComplete', async (req, res, next) => {
  try {
    const keyword = req.query.keyword || ''
    const data = await googleTrends.autoComplete({
      keyword,
      resolution: 'COUNTRY',
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
      keyword,
      resolution: 'COUNTRY',
      geo: 'VN',
      hl: 'vi',
      startTime: new Date(utils.getToday() - 12 * utils.HOUR),
      endTime: utils.getToday(),
      granularTimeResolution: true
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
      startTime: new Date(new Date().getTime() - utils.DAY),
      endTime: new Date(),
      resolution: 'COUNTRY',
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
      resolution: 'COUNTRY',
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
    const { region, lang } = req.query
    const data = await googleTrends.realTimeTrends({
      category: 'all',
      resolution: 'COUNTRY',
      geo: region,
      hl: lang
    })
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

router.get('/dailyTrends', async (req, res, next) => {
  try {
    const { region, lang } = req.query
    const data = await googleTrends.dailyTrends({
      trendDate: new Date(),
      resolution: 'COUNTRY',
      geo: region,
      hl: lang
    })
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

module.exports = router
