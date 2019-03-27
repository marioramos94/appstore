import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-body'
import errorMiddleware from './error'

export default class Middlewares {
  constructor(private app: Koa) {
    this.app = app
  }
  public init() {
    const options = {
      origin: '*'
    }
    this.app.use(cors(options))
    this.app.use(errorMiddleware)
    this.app.use(bodyParser())
  }
}
