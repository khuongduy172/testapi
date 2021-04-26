var productsSchema = require('../collections/products.collections')

async function GetProducts () {
    const products = await productsSchema.find();

    return products;
}
async function GetProductById (id) {
    const product = await productsSchema.findById(id);

    return product;
}

async function AddProduct (data) {
    const product = new productsSchema(data);
    product.save();
    return product;
}

async function UpdateProductById(id, data) {
    const updated = await productsSchema.findOneAndUpdate({
        _id: id,
    }, data, {
        new: true, 
    });

    return updated;
}

async function DeleteProductById(id) {
    const deleted = await productsSchema.findByIdAndDelete(id);

    return deleted;
}

module.exports = {
    GetProducts,
    GetProductById,
    AddProduct,
    UpdateProductById,
    DeleteProductById
}