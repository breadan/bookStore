import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
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
  },
  { timestamps: true }
);

export const categoryModel = model('Category', categorySchema);
