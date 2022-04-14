const faker = require('faker-br');
const request = require('request');

const imageService = {

    getImage: () => {
        return new Promise((resolve, reject) => {
            let option = {
                url: process.env.IMG_API,
                method: 'GET'
            }
            request(option, (err, res, body) => {
                if (err) reject(err);
                resolve(res.request.href);
            })
        })
    }
}

class ProductService {

    getProducts = async (qtd) => {

        let products = [];
        let image = await imageService.getImage();

        for (let i = 0; i < qtd; i++) {

            let product = {
                productId: faker.random.uuid(),
                price: faker.commerce.price(),
                product: faker.commerce.product(),
                productName: faker.commerce.productName(),
                department: faker.commerce.department(),
                productAdjective: faker.commerce.productAdjective(),
                productMaterial: faker.commerce.productMaterial(),
                brand: faker.company.bsBuzz(),
                description: faker.lorem.paragraph(),
                size: this.getSize(Math.trunc(Math.random() * 7)),
                voltage: this.getVoltage(Math.trunc(Math.random() * 3)),
                flavor: this.getFlavor(Math.trunc(Math.random() * 4)),
                color: faker.commerce.color(),
                image
            }

            products.push(product)
        }
        return { qtd, products };

    }

    getSize = (pos) => {
        let sizes = ['P', 'M', 'G', 'GG', 'X', 'XL', 'XXL', ''];
        return sizes[pos];
    }

    getVoltage = (pos) => {
        let voltages = ['110V', '220V', 'BI-VOLT', ''];
        return voltages[pos];
    }

    getFlavor = (pos) => {
        let flavors = ['MORANGO', 'BATATA', 'ABACATE', 'LIMÃO', ''];
        return flavors[pos];
    }
}

class CustomersService {
    getCustomers = (qtd) => {

        let customers = [];
        for (let i = 0; i < qtd; i++) {

            customers.push({
                cpf: faker.br.cpf(),
                name: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                address: {
                    street: faker.address.streetName(),
                    number: `${faker.random.number()}`,
                    city: faker.address.city(),
                    state: faker.address.stateAbbr(),
                    zipCode: faker.address.zipCodeValid()
                }
            })
        }
        return { qtd, customers };
    }
}

module.exports = {
    productService: new ProductService(),
    customersService: new CustomersService()
}