const { productCreator, products } = require("./model")


const createProduct = (data) => {
    const product = productCreator(data)

    return product
}

const listProducts = (id) => {
    if (id) {
        const product = products.find(({ id: _id }) => id === _id)
        if (!product) throw new Error('Product not found')

        return product
    }

    return products
}

module.exports = {
    createProduct,
    listProducts
}