import { mongo } from '@xorb/mongo'
import { ObjectID } from 'mongodb'

export async function getProducts() {
  const db = await mongo.getDb()
  return new Promise((resolve, reject) => {
    db.collection('products')
      .find({})
      .toArray((err, data) => {
        err ? reject(err) : resolve(data)
      })
  })
}

export async function getProduct(id: string) {
  const db = await mongo.getDb()
  const productId = new ObjectID(id)
  return new Promise((resolve, reject) => {
    db.collection('products')
      .findOne({ _id: productId })
      .then(data => {
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

export async function createProduct(name: string, price: number) {
  const db = await mongo.getDb()
  const product = { name, price }
  return new Promise((resolve, reject) => {
    db.collection('products').insertOne(product, (err, response) => {
      err ? reject(err) : resolve(response.ops[0])
    })
  })
}

export async function deleteProduct(id: string) {
  const db = await mongo.getDb()
  const productId = new ObjectID(id)
  return new Promise((resolve, reject) => {
    db.collection('products')
      .findOneAndDelete({ _id: productId })
      .then(res => (res.value === null ? reject() : resolve()))
      .catch(() => reject())
  })
}

export async function updateProduct(id: string, name: string, price: number) {
  const db = await mongo.getDb()
  const todoId = new ObjectID(id)
  return new Promise((resolve, reject) => {
    db.collection('products').findOneAndUpdate(
      { _id: todoId },
      {
        $set: {
          name,
          price
        }
      },
      { returnOriginal: false },
      (err, response) => {
        err ? reject(err) : resolve(response.value)
      }
    )
  })
}

export default {
  getAll: getProducts,
  getOne: getProduct,
  create: createProduct,
  deleteOne: deleteProduct,
  updateOne: updateProduct
}
