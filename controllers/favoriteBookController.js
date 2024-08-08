const FavoriteBook = require("../models/favoriteBook");

exports.favorite_book_create_post = (req, res, next) => {
  const favoriteBook = new FavoriteBook({
    book: req.body.book,
    user: req.body.user,
  });

  favoriteBook.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect(favoriteBook.url);
  });
};

exports.favorite_book_list = (req, res, next) => {
  FavoriteBook.find()
    .populate("book")
    .populate("user")
    .exec((err, list_favoriteBooks) => {
      if (err) {
        return next(err);
      }
      res.render("favorite_book_list", {
        title: "Favorite Book List",
        favorite_book_list: list_favoriteBooks,
      });
    });
};
