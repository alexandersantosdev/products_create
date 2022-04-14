const { customersService, productService } = require('./services');

const productController = {
    getProducts: async (req, res) => {
        let qtd = 1;
        if (req.params && req.params.qtd) qtd = req.params.qtd;
        let products = await productService.getProducts(qtd);
        res.json(products);
    }
}
const customerController = {
    getCustomers: (req, res) => {
        let qtd = 1;
        if (req.params && req.params.qtd) qtd = req.params.qtd;
        let customers = customersService.getCustomers(qtd);
        res.json(customers);
    }
}

module.exports = {
    productController,
    customerController
}