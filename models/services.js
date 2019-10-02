const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  seeker:{type: String},
  offerer:{type: String, required: true},
  description: { type: String, required: true },
  email:{type: String, required: true},
  serviceType: {type: String, required: true},
  serviceRendered:{type: Boolean, default:false},
 
  date: { type: Date, default: Date.now }
});

const services = mongoose.model("Services", serviceSchema);

module.exports = services;
