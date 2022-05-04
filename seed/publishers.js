//import all the things we are going to use

const Publisher = require("../models/publisher");

const main = async () => {
 const publishers = [
  { name: 'Penguin Books', location: '375 Hudson St, New York, NY 10014', url: 'https://penguin.com' },
  { name: 'HarperCollins', location: '10 E 53rd St, New York, NY 10022', url: 'https://www.harpercollins.com' }
 ]
 await Publisher.insertMany(publishers)
 console.log("Created publishers!!");
}

const run = async () => {
  await main()
  db.close()
}

run()