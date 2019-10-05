const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

  text: { type: String, required: true },
  
  data: { type: Schema.Types.ObjectId, ref: 'Data'},
 
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  
  date: { type: Date, default: Date.now }
    
  
});

const Comment = mongoose.model("Comment", bookSchema);

module.exports = Comment;