import express from 'express';
import validationMiddleware from '../middleware/validation.middleware.js';
import categorySchema from '../../utils/category.validationSchemas.js';
import expressAsyncHandler from 'express-async-handler';
import {
  createCategory,
  deleteCategory,
  getAllProduct,
  getCategoryById,
  updateCategory,
} from '../modules/category/category.controller.js';

const categoryRouter = express.Router();

//***********Create Book*************** */
categoryRouter.post(
  '/createCategory',
  validationMiddleware(categorySchema),
  expressAsyncHandler(createCategory)
);

//*********** Get All Books*************** */
categoryRouter.get('/getAllProduct', expressAsyncHandler(getAllProduct));

//*********** Get specific book *************** */
categoryRouter.get('/getCategory/:_id', expressAsyncHandler(getCategoryById));

//*********** Get specific book *************** */
categoryRouter.put('/updateCategory/:id', expressAsyncHandler(updateCategory));

//*********** Get specific book *************** */
categoryRouter.delete(
  '/deleteCategory/:id',
  expressAsyncHandler(deleteCategory)
);

export default categoryRouter;
