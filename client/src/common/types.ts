export interface ApplicationState {
  products: ProductsState
  cartitems: CartitemsState
}

export interface ProductsState {
  data: Product[]
  loading: boolean
}

export interface Product {
  _id: string
  name: string
  price: number
}

export interface CartitemsState {
  data: string[]
}
