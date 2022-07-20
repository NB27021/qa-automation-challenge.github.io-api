'use strict'

module.exports = function (app) {
  var productsList = require('../controllers/products')

  app.route('/products')
    .get(productsList.list_all_products)
    .post(productsList.create_a_product)

  app.route('/products/:productId')
    .get(productsList.read_a_product)
    .put(productsList.update_a_product)
    .patch(productsList.update_product_characteristic)
    .delete(productsList.delete_a_product)

  app.route('/products/product/:productId')
    .get(productsList.redirect_to_product)

  app.route('/products/listProducts/productsXML')
    .get(productsList.list_all_products_with_xml)
}
