import { mongo } from '@xorb/mongo'
import { createServer, Server } from 'http'
import Koa from 'koa'
import Middlewares from './middlewares'
import Routes from './routes'
import { normalizePort } from './utils'

export default class StoreService {
  private app: Koa
  private server: Server
  constructor() {
    this.app = new Koa()
    this.server = createServer(this.app.callback())
  }
  public init() {
    this.initDatabase()
    this.initMiddlewares()
    this.initRoutes()
    this.initApp()
  }
  private initRoutes() {
    const routes = new Routes(this.app)
    routes.init()
  }
  private initMiddlewares() {
    const middlewares = new Middlewares(this.app)
    middlewares.init()
  }
  private async initDatabase() {
    try {
      const uri = process.env.MDURI as string
      await mongo.connect(uri)
      console.log('Connected to Mongo')
    } catch (err) {
      console.log('Unable to connect Mongo')
    }
  }
  private initApp() {
    const port = normalizePort(process.env.PORT)
    const hostname = process.env.HOST || '0.0.0.0'
    this.server.listen(port, hostname, () =>
      console.log(`Server running at http://${hostname}:${port}/`)
    )
  }
}
