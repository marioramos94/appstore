import StoreService from './StoreService'
import Config from './config'

const todoService = new StoreService()
const config: Config = new Config()

config.init()
todoService.init()