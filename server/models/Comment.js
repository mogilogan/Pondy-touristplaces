import mongoose from 'mongoose';



const commentSchema = mongoose.Schema({
  review: String,
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
