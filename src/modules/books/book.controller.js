import { bookModel } from '../../../models/books/book.model.js';

//************************ CreateBook************ */
const createBook = async (req, res, next) => {
  const { name, description, price, author, stock } = req.body;
  const isBookExists = await bookModel.findOne({ name });
  if (isBookExists) {
    return next(new Error('Book is Already exists', { cause: 409 }));
  }
};

export { createBook };
