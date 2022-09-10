import { baseURL } from 'utils/constants'

export default class Middleware {
  middleware: WebSocket
  level: number

  constructor() {
    this.middleware = new WebSocket(baseURL as string)
    this.level = 1
  }
}
