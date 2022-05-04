//create a schema

//import from mongoose
const { Schema, model, } = require('mongoose')

const publisherSchema (
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        url: { type: String, required: true },
    },
    
    {timestanps: true}
)

module.exports = module('Publisher', publisherSchema)