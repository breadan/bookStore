import Joi from 'joi';

const bookSchema = {
  body: Joi.object({
    name: Joi.string().trim().required().min(5).max(20),
    title: Joi.string().min(5).max(20),
    price: Joi.number().positive(),
    pages: Joi.number().positive(),
    stock: Joi.number().positive(),
  }),
};

export default bookSchema;
