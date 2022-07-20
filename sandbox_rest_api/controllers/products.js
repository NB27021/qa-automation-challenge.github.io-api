'use strict'
var Product = require('../models/products')

exports.list_all_products = function (req, res) {
  Product.getAllProducts(function (err, products) {
    if (err) {
      res.send(err)
    }
    res.send(products)
  })
}

exports.create_a_product = function (req, res) {
  var newProduct = new Product(req.body)
  if (req.params.productId !== '') {
    newProduct.id = req.params.productId
  }
  if (!newProduct.product || !newProduct.value) {
    res.status(422).send({ message: 'Invalid product parameters', code: 422 })
  } else {
    Product.createProduct(newProduct, function (err, product) {
      if (err) {
        res.send(err)
      }
      res.status(201).json(product)
    })
  }
}

exports.read_a_product = function (req, res) {
  Product.getProductById(req.params.productId, function (err, product) {
    if (err) {
      res.send(err)
    } else if (product.length !== 0) {
      res.header('Product-Id', 'id: ' + req.params.productId).status(200).json(product)
    } else {
      res.status(404).send({ message: "Product doesn't exist", code: 404 })
    }
  })
}

exports.redirect_to_product = function (req, res) {
  res.redirect(301, '/products/' + req.params.productId)
}

exports.update_a_product = function (req, res) {
  if (!req.body.product || !req.body.value) {
    res.status(422).send({ message: 'Invalid product parameters', code: 422 })
  } else {
    Product.getProductById(req.params.productId, function (_err, productFound) {
      if (productFound.length !== 0) {
        Product.updateById(req.params.productId, new Product(req.body), function (err, product) {
          if (err) {
            res.send(err)
          }
          res.status(200).json(product)
        })
      } else {
        exports.create_a_product(req, res)
      }
    })
  }
}

exports.update_product_characteristic = function (req, res) {
  if (!req.body.product && !req.body.value) {
    res.status(422).send({ message: 'Invalid product parameters', code: 422 })
  } else {
    Product.getProductById(req.params.productId, function (_err, productFound) {
      if (productFound.length !== 0) {
        Product.updateCharacteristicById(req.params.productId, req.body, function (err, product) {
          if (err) {
            res.send(err)
          }
          res.status(200).json(product)
        })
      } else {
        res.status(404).send({ message: "Product doesn't exist", code: 404 })
      }
    })
  }
}

exports.delete_a_product = function (req, res) {
  Product.getProductById(req.params.productId, function (_err, product) {
    if (product.length !== 0) {
      Product.remove(req.params.productId, function (err, result) {
        if (err) {
          res.send(err)
        }
        res.status(204).json('')
      })
    } else {
      res.status(404).send({ message: "Product doesn't exist", code: 404 })
    }
  })
}

exports.list_all_products_with_xml = function(req, res) {
  Product.getAllProducts(function(err, products) {
    if (err) {
      res.send(err)
    } else {
      let xmlData ='<?xml version="1.0" encoding="UTF-8"?>'

      products = Object.values(JSON.parse(JSON.stringify(products)))
      console.log(products)

      xmlData += 
      `
      <Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <Body>
          <products xmlns:m="http://sandbox-rest-api:5000/products/listProducts/withXML">`

      for (let i = 0; i < products.length; i++) {
        xmlData += `
            <product>
                <id>${products[i].id}</id>
                <name>${products[i].product}</name>
                <value>${products[i].value}</value>
            </product>`
      }

      xmlData += 
      `
          </products>
        </Body>
      </Envelope>`

      res.header('content-type', 'application/xml')
      res.status(200).send(xmlData)
    }
  })
}