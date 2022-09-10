import { useEffect, useState } from 'react'

import Container from 'components/Container'
import Middleware from 'middleware/'

export default function App() {
  const [connection] = useState(new Middleware())
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (!isConnected) {
      connection.middleware.onopen = () => {
        console.log('Websocket is connected')

        setIsConnected(true)
      }
    }
  }, [connection, isConnected])

  return (
    <Container>
      <h1>Hello World</h1>
      {isConnected && 'Hello isConnected'}
    </Container>
  )
}
