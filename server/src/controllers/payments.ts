import { mongo } from '@xorb/mongo'
import { ObjectID } from 'mongodb'

export async function getPayments() {
  const db = await mongo.getDb()
  return new Promise((resolve, reject) => {
    db.collection('payments')
      .find({})
      .toArray((err, data) => {
        err ? reject(err) : resolve(data)
      })
  })
}

export async function createPayment(productId: string, quantity: number) {
  const db = await mongo.getDb()
  const payment = { product_id: productId, quantity }
  return new Promise((resolve, reject) => {
    db.collection('payments').insertOne(payment, (err, response) => {
      err ? reject(err) : resolve(response.ops[0])
    })
  })
}

export async function getPaymentForProduct(id: string) {
  const db = await mongo.getDb()
  return new Promise((resolve, reject) => {
    db.collection('payments')
      .find({ product_id: id })
      .toArray((err, data) => {
        err ? reject(err) : resolve(data)
      })
  })
}

export default {
  getAll: getPayments,
  createOne: createPayment,
  getPaymentForProduct
}
