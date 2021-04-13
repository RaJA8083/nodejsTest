import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: String,
        discription: String,
        specifications: [{
            key: String,
            value: String,
        }],
        images: [String],
        price: String,
        categories: [{
            key: String,
            value: {
                type: Schema.Types.ObjectId,
                ref: 'Category',
            },
        }],
        isShippingRequired: String,
        isPublished: Boolean,
        isOutOfStock: Boolean,
        engagement: Number,
    },
    { timestamps: true }
);
ProductSchema.index({ location: 1 });

const Product = mongoose.model('Product', ProductSchema);

export { 
    Product
};
