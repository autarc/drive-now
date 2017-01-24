/**
 * # Example: Cities
 *
 * Examples to retieve data
 */

const DriveNow = require('../lib/index')

console.log(DriveNow)

const client = new DriveNow.Client({
  apikey: process.env.DRIVE_NOW,
  language: 'de'
})

client.cities({
  // expand: 'carTypes'
})
.then((cities) => {
  console.log('cities', JSON.stringify(cities, null, '\t'))
})
.catch(console.error.bind(console))

// 6099 = berlin
// 4604 = munich
// client.city(6099)
// .then(city => {
//   console.log('city', JSON.stringify(city, null, '\t'))
// })
// .catch(console.error.bind(console))
