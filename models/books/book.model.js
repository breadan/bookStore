import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 4,
      maxLength: 15,
    },
    description: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
    },
    stock: {
      type: Number,
    },
    productId: { type: Schema.Types.ObjectId, ref: 'Category' },
  },
  { timestamps: true }
);

export const bookModel = model('Book', bookSchema);
