import { baseURL } from 'utils/constants'

export default class Middleware {
  middleware: WebSocket
  level: number

  constructor() {
    this.middleware = new WebSocket(baseURL as string)
    this.level = 1
  }

  init() {
    const connection = this.middleware

    connection.onopen = () => {
      console.log('The connection has been established.')

      return true
    }

    connection.onclose = () => {
      console.log('The connection has been closed.')
    }
  }
}
