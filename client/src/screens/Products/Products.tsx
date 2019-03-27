import React, { Component } from 'react'
import { Product } from '../../common/types'
import './index.css'

interface IProps {
  products: Product[]
}
interface IState {
  cartItems: string[]
}

class Products extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      cartItems: []
    }
  }

  addItem = (_id: string) => {
    if (this.state.cartItems.indexOf(_id) >= 0) {
      const cartItems = this.state.cartItems.filter(item => item !== _id)
      this.setState({ cartItems })
      return
    }
    this.setState({ cartItems: this.state.cartItems.concat(_id) })
  }
  render() {
    if (this.props.products.length === 0) {
      return <div>loading products</div>
    }
    const productsList = this.props.products.map(product => {
      const added = this.state.cartItems.indexOf(product._id)
      const className = added >= 0 ? 'product added' : 'product'
      return (
        <div
          key={product._id}
          className={className}
          onClick={() => this.addItem(product._id)}
        >
          <div className="product-header">
            <div>{product.name}</div>
            <div className="product-added">{added >= 0 ? '(added)' : null}</div>
          </div>
          <div className="product-footer">{product.price}</div>
        </div>
      )
    })
    return (
      <div className="products">
        <div className="products-header">
          <h1>Products</h1>
          <h1 className="products-selected">
            Items selected: {this.state.cartItems.length}
          </h1>
        </div>
        <div className="products-list">{productsList}</div>
        <div className="products-footer">
          <div className="go-to-payments">Go to payments</div>
        </div>
      </div>
    )
  }
}

export default Products
