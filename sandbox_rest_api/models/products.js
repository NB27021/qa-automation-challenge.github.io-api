'use strict'
var sql = require('./db.js')

var Product = function (product) {
  this.product = product.product
  this.value = product.value
}

Product.createProduct = function (newProduct, result) {
  sql.query('insert into products set ?', newProduct, function (err, res) {
    if (err) {
      result(err, null)
    } else {
      Product.getProductById(res.insertId, result)
    }
  })
}

Product.getProductById = function (productId, result) {
  sql.query('select * from products where id = ? ', productId, function (err, res) {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

Product.getAllProducts = function (result) {
  sql.query('select * from products', function (err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

Product.updateById = function (id, product, result) {
  sql.query('update products set product = ?, value = ? where id = ?', [product.product, product.value, id], function (err, res) {
    if (err) {
      result(null, err)
    } else {
      Product.getProductById(id, result)
    }
  })
}

Product.updateCharacteristicById = function (id, body, result) {
  var characteristic = ''
  var value = ''
  if (body.product) {
    characteristic = 'product'
    value = body.product
  } else {
    characteristic = 'value'
    value = body.value
  }
  sql.query('update products set ' + characteristic + ' = ? where id = ?', [value, id], function (err, res) {
    if (err) {
      result(null, err)
    } else {
      Product.getProductById(id, result)
    }
  })
}

Product.remove = function (id, result) {
  sql.query('delete from products where id = ?', id, function (err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Product
