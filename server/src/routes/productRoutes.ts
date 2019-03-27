import { IRoute } from '../common/types'
import {
  createPayment,
  getPayments,
  getPaymentForProduct
} from '../handlers/payments'
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct
} from '../handlers/products'
const routes: IRoute[] = [
  {
    method: 'get',
    path: '/products',
    action: getProducts
  },
  {
    method: 'get',
    path: '/products/:id',
    action: getProduct
  },
  {
    method: 'post',
    path: '/products',
    action: createProduct
  },
  {
    method: 'put',
    path: '/products/:id',
    action: updateProduct
  },
  {
    method: 'delete',
    path: '/products/:id',
    action: deleteProduct
  },
  {
    method: 'get',
    path: '/payments',
    action: getPayments
  },
  {
    method: 'post',
    path: '/payments',
    action: createPayment
  },
  {
    method: 'get',
    path: '/payments/:id',
    action: getPaymentForProduct
  }
]

export default routes
