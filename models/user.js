const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  username: { type: String, required: true },
  socialId: { type: Number},
  firstname: { type: String},
  lastname: { type: String},
  email: { type: String},
  password: { type: String},
  eventsHosted: [
      { type: Schema.Types.ObjectId, ref: 'Event' }
  ],
  eventsParticipation: [
    { type: Schema.Types.ObjectId, ref: 'Event' }
]
  
});

const User = mongoose.model("User", bookSchema);

module.exports = User;