// Get source and destination adddress from commandline
// Get geocodes from address
// Pass these geocodes to Google traffic API

const yargs = require('yargs')
const geocode = require('./geocode')
const argv = yargs
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

console.log(JSON.stringify(argv.s))




