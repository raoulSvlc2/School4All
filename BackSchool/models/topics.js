const mongoose= require('mongoose');
const Schema= mongoose.Schema
const TopicsSchema = new Schema(
    {
    label: { required: true, type: String },
    creator: {
      type: Object,
      required: String,
    },
  },
  { timestamps: true }
);

module.exports= mongoose.model('TOPICS', TopicsSchema)