import express from 'express';
import validationMiddleware from '../middleware/validation.middleware.js';
import bookSchema from '../../utils/book.validation.js';
import expressAsyncHandler from 'express-async-handler';
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from '../modules/books/book.controller.js';

const bookRouter = express.Router();

//***********Create Book*************** */
bookRouter.post(
  '/createBook/:productId',
  validationMiddleware(bookSchema),
  expressAsyncHandler(createBook)
);

//*********** Get All Books*************** */
bookRouter.get('/getAllBooks', expressAsyncHandler(getAllBooks));

//*********** Get specific book *************** */
bookRouter.get('/getBook/:_id', expressAsyncHandler(getBookById));

//*********** Get specific book *************** */
bookRouter.put('/updateBook/:id', expressAsyncHandler(updateBook));

//*********** Get specific book *************** */
bookRouter.delete('/deleteBook/:id', expressAsyncHandler(deleteBook));

export default bookRouter;
