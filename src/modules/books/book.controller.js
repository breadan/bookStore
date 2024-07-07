import { bookModel } from '../../../models/books/book.model.js';
import { categoryModel } from '../../../models/category/category.model.js';

//************************ CreateBook****************** */
const createBook = async (req, res, next) => {
  const { name, description, price, author, stock } = req.body;
  const { productId } = req.params;
  const isProductExist = await categoryModel.findById({ _id: productId });
  if (!isProductExist) {
    return next(new Error('Invalid Product ID', { cause: 400 }));
  }
  const isBookExists = await bookModel.findOne({ name });
  if (isBookExists) {
    return next(new Error('Book is Already exists', { cause: 409 }));
  }
  const newBook = await bookModel.create({
    name,
    description,
    price,
    author,
    stock,
    productId,
  });
  return res
    .status(201)
    .json({ message: 'Book created successfully', newBook });
};

//************************ Get All Books************ */
const getAllBooks = async (req, res, next) => {
  const books = await bookModel.find({}).select('-_id');
  if (!books)
    next(new Error('Internal Server Error Not Books', { cause: 404 }));

  return res.status(201).json({ data: { books } });
};

//************************ Get specific book ************ */
const getBookById = async (req, res, next) => {
  const { _id } = req.params;
  console.log(_id);
  const book = await bookModel.findById(_id);
  if (!book) {
    return new Error('Book not found', { cause: 404 });
  }
  res.json({ message: 'Done', book });
};

//************************ Update specific book ************ */
const updateBook = async (req, res, next) => {
  const { name, description, price, author, stock } = req.body;
  const isBookExists = await bookModel.findOne({ name });
  if (isBookExists) {
    return next(new Error('Book is Already exists', { cause: 409 }));
  }
  const { id } = req.params;
  console.log(id);
  const book = await bookModel.findByIdAndUpdate(
    id,
    { name, description, price, author, stock, $inc: { __v: 1 } },
    { new: true }
  );
  if (!updateBook) {
    return new Error('update failed', { cause: 404 });
  }
  res.status(200).json({ message: 'Book update', book });
};

//************************* DELETE USER ********************** */
const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  const deleteBook = await bookModel.findByIdAndDelete(id);
  if (!deleteBook) {
    return next(new Error('delete failed', { cause: 404 }));
  }

  res.status(200).json({ message: 'Book delete' });
};

export { createBook, getAllBooks, getBookById, updateBook, deleteBook };
