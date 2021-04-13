/* eslint-disable no-console */
import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        description: String,
        imageUrl: String,
        categoryType: String,
        specifications: [{
            key: String,
            value: String,
        }],
        products: [{
            type: Schema.Types.ObjectId, ref: 'Product',
        }],
        isActive: Boolean,
    },
    { timestamps: true }
);



const Category = mongoose.model('Category', CategorySchema);

export {
    Category,
};
