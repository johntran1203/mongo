//create a schema

//import from mongoose
const { Schema, model } = require('mongoose')

const publisherSchema = new Schema(
  {
    name: { type: String, required:true },
    location: { type: String, required:true },
    url: { type: String, required:true }
  },
  { timestamps: true }
)

module.exports = model('Publisher', publisherSchema);