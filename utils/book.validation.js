import Joi from 'joi';

const bookSchema = {
  body: Joi.object({
    name: Joi.string().trim().required().min(5).max(20),
    description: Joi.string().min(5).max(20),
    author: Joi.string().trim().required().min(5).max(20),
    price: Joi.number().positive(),
    stock: Joi.number().positive(),
  }),
};

export default bookSchema;
