import { Context } from 'koa'
import products from '../controllers/products'

export async function getProducts(ctx: Context) {
  try {
    const data = await products.getAll()
    ctx.body = { data }
  } catch (err) {
    ctx.throw(err)
  }
}

export async function getProduct(ctx: Context) {
  try {
    const { id } = (ctx as any).params
    const data = await products.getOne(id)
    data ? (ctx.body = { data }) : ctx.throw(404, 'Product not found')
  } catch (err) {
    ctx.throw(err)
  }
}

export async function createProduct(ctx: Context) {
  try {
    const { name, price } = ctx.request.body
    const data = await products.create(name, price)
    ctx.body = {
      data
    }
  } catch (err) {
    ctx.throw(err)
  }
}

export async function deleteProduct(ctx: Context) {
  try {
    const { id } = (ctx as any).params
    await products.deleteOne(id)
    ctx.status = 200
    ctx.body = {
      data: true
    }
  } catch (err) {
    ctx.throw(err)
  }
}

export async function updateProduct(ctx: Context) {
  try {
    const { id } = (ctx as any).params
    const { name, price } = ctx.request.body
    const data = await products.updateOne(id, name, price)
    ctx.body = {
      data
    }
  } catch (err) {
    ctx.throw(err)
  }
}
