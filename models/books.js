const { model, Schema } = require("mongoose");

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publish_date: { type: String, required: true },
    publish_id: { type: Schema.Types.ObjectId, ref: 'Publisher', required: true },
  },
  { timestamps: true }
);

module.exports = model("Book", bookSchema);