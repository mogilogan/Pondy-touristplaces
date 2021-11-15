import mongoose from 'mongoose';



const commentSchema = mongoose.Schema({
  comment: String,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
