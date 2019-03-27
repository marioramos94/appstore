import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProductsState } from '../common/types'
import { Products, Delivery, Payment } from '../screens'

interface AppProps {
  products: ProductsState
  getAllProducts: () => void
}

const App: React.SFC<AppProps> = props => {
  useEffect(() => {
    console.log('Hello from rendering')
    props.getAllProducts()
  }, [])
  return (
    <Switch>
      <Route path="/delivery" component={Delivery} />
      <Route path="/payment" component={Payment} />
      <Route path="/" component={Products} />
    </Switch>
  )
}

export default App
