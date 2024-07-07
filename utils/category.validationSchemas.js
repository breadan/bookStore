import Joi from 'joi';

const categorySchema = {
  body: Joi.object({
    name: Joi.string().trim().required().min(5).max(20),
    description: Joi.string().min(5).max(20).required(),
  }),
};

export default categorySchema;
