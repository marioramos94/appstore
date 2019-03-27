import { mongo } from '@xorb/mongo'
import { Db } from 'mongodb'

const products = [
  {
    name: 'Microwave',
    price: 125
  },
  {
    name: 'Blender',
    price: 46
  },
  {
    name: 'Guitar',
    price: 254
  },
  {
    name: 'Piano',
    price: 320
  },
  {
    name: 'Door',
    price: 72
  }
]
async function createProducts() {
  try {
    const db: Db = await mongo.getDb()
    const res = await db.collection('products').insertMany(products)
    console.log(res)
  } catch {
    console.log('Somethign went wrong')
  }
}

export { createProducts }
