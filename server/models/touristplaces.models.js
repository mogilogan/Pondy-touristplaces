const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comments: { type: String, required: true },
}, {
  timestamps: true,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
