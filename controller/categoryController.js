import mongoose from 'mongoose';
import {Category} from '../model/categoryModel';
import {Product} from '../model/productModel';


export const deleteCategory = async (req, res) => {
    try {
        if (req.params && req.params.role === 'admin') {
            const categoryId = mongoose.Types.ObjectId(req.params.id);
            const result = await Category.findById(categoryId);
            const productList = result.products;
            const deletedProduct = await Product.remove({ '_id': { '$in': productList } })
            const newResult = await Category.findByIdAndDelete(categoryId)
            return res.status(200).json({ error: false, message: 'category deleted', data: result });
        }
        return res.status(500).json({ error: true, message: "Please contact with Admin to delete category" });

    } catch (e) {
        return res.status(500).json({ error: true, message: e.message });
    }
};




