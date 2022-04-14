const routes = require('express').Router();
const { customerController, productController } = require('./controllers');

routes.get('', (req, res) => {
    res.json({
        docs: `Available API's routes`,
        apis: {
            products: {
                one: {
                    url: 'http://localhost:4444/products',
                    message: 'Returns 1 product'
                },
                many: {
                    url: 'http://localhost:4444/products/:qtd',
                    message: 'Returns {qtd} products'
                }
            },
            customers: {
                one: {
                    url: 'http://localhost:4444/customers',
                    message: 'Returns 1 customer'
                },
                many: {
                    url: 'http://localhost:4444/customers/:qtd',
                    message: 'Returns {qtd} customers'
                }
            }
        }
    });
})

routes.get('/customers', customerController.getCustomers);
routes.get('/customers/:qtd', customerController.getCustomers);
routes.get('/products', productController.getProducts);
routes.get('/products/:qtd', productController.getProducts);

module.exports = routes;