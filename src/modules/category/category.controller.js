import { bookModel } from '../../../models/books/book.model.js';
import { categoryModel } from '../../../models/category/category.model.js';

//************************ CreateBook************ */
const createCategory = async (req, res, next) => {
  const { name, description } = req.body;
  const isCategoryExists = await categoryModel.findOne({ name });
  if (isCategoryExists) {
    return next(new Error('Category is Already exists', { cause: 409 }));
  }
  const newCategory = await categoryModel.create({
    name,
    description,
  });
  return res
    .status(201)
    .json({ message: 'Category created successfully', newCategory });
};

//************************ Get All Product ************ */
const getAllProduct = async (req, res, next) => {
  const product = await categoryModel.find({}).select('-_id');
  if (!product)
    next(new Error('Internal Server Error Not product', { cause: 404 }));

  return res.status(201).json({ data: { product } });
};

//************************ Get specific book ************ */
const getCategoryById = async (req, res, next) => {
  const { _id } = req.params;
  console.log(_id);
  const category = await categoryModel.findById(_id);
  if (!category) {
    return new Error('Book not found', { cause: 404 });
  }
  res.json({ message: 'Done', category });
};

//************************ Update specific book ************ */
const updateCategory = async (req, res, next) => {
  const { name, description } = req.body;
  const isCategoryExists = await categoryModel.findOne({ name });
  if (isCategoryExists) {
    return next(new Error('Category is Already exists', { cause: 409 }));
  }
  const { id } = req.params;
  console.log(id);
  const category = await categoryModel.findByIdAndUpdate(
    id,
    { name, description, $inc: { __v: 1 } },
    { new: true }
  );
  if (!updateCategory) {
    return new Error('update failed', { cause: 404 });
  }
  res.status(200).json({ message: 'Book update', category });
};

//************************* DELETE USER ********************** */
const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  const deleteCategory = await categoryModel.findByIdAndDelete(id);
  if (!deleteCategory) {
    return next(new Error('delete failed', { cause: 404 }));
  }

  res.status(200).json({ message: 'Category delete' });
};

export {
  createCategory,
  getAllProduct,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
