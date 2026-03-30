const mongoose = require('mongoose');

const { Schema } = mongoose;

const contentSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    fields: { type: Schema.Types.Mixed, default: {} },
    images: { type: Schema.Types.Mixed, default: {} },
    user: { type: Schema.Types.ObjectId, ref: 'Admin' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Content', contentSchema);



