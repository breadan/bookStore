import express from 'express';
import validationMiddleware from '../middleware/validation.middleware';
import bookSchema from '../../utils/book.validation';

const bookRouter = express.Router();

//***********Create Book*************** */
bookRouter.post('/createBook', validationMiddleware(bookSchema));

export default bookRouter;
