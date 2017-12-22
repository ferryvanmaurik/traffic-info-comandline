// Get source and destination adddress from commandline
// Get geocodes from address
// Pass these geocodes to Google traffic API

const yargs = require('yargs')
const geocode = require('./geocode')
const argv = yargs
const request = require('request')
const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Aldrinhof 5 3402DC IJsselstein"

    .options({
     s: {
         demand: true,
         alias: 'source',
         describe: 'Type the address from',
         string: true
     },
     d: {
         demand: true,
         alias: 'destination',
         describe: 'Type the address to',
         string: true
     } 
 })

    .help()
    .alias('help', 'h')
    .argv

var source = (JSON.stringify(argv.s))
var destination = (JSON.stringify(argv.d))
console.log('Source address: ' + source)
console.log('Destination address: ' + destination)

request({url: url}, function (error, response, body) {
    if (error) {
        console.log('Prutser!')
    }
    else {
        console.log(body)
    }
})


