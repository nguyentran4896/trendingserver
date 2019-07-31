const MINUTE = 60000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const getToday = () => (new Date())
const getYesterday = () => (new Date(getToday() - DAY))

module.exports = {
  MINUTE,
  HOUR,
  DAY,
  getToday,
  getYesterday
}
