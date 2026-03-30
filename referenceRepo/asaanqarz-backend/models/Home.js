const mongoose = require('mongoose');

const { Schema } = mongoose;

// Flexible schema: text fields live under fields{}.
// Images can be added later under images{} without breaking existing data.
const homeSchema = new Schema(
  {
    slug: {
      type: String,
      default: 'home',
      unique: true,
      index: true,
    },
    fields: {
      type: Schema.Types.Mixed,
      default: {},
    },
    images: {
      type: Schema.Types.Mixed,
      default: {},
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Home', homeSchema);


