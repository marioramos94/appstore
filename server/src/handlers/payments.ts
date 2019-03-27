import { Context } from 'koa'
import payments from '../controllers/payments'

export async function getPayments(ctx: Context) {
  try {
    const data = await payments.getAll()
    ctx.body = { data }
  } catch (err) {
    ctx.throw(err)
  }
}

export async function createPayment(ctx: Context) {
  try {
    const { product_id, quantity } = ctx.request.body
    const data = await payments.createOne(product_id, quantity)
    ctx.body = {
      data
    }
  } catch (err) {
    ctx.throw(err)
  }
}

export async function getPaymentForProduct(ctx: Context) {
  try {
    const { id } = (ctx as any).params
    const data = await payments.getPaymentForProduct(id)
    data ? (ctx.body = { data }) : ctx.throw(404, 'Product not found')
  } catch (err) {
    ctx.throw(err)
  }
}
