const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavoriteBookSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("FavoriteBook", FavoriteBookSchema);
