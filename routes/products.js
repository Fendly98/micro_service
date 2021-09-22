var express = require('express');
const { createProduct, listProducts } = require('../product');
var router = express.Router();

/* GET products listing. */
router.get('/', function (req, res, next) {
    const products = listProducts();
    res.send(products);
});

router.get('/:id', (req, res) => {
    const { id } = req.params

    try {
        const product = getProduct(id)

        res.send(product)
    } catch (error) {
        res.send({ error: error.message });
    }
})

router.post('/', (req, res) => {
    const data = req.body

    try {
        const newProduct = createProduct(data)

        res.send(newProduct);
    } catch (error) {
        res.send({ error: error.message });
    }
})

module.exports = router;
