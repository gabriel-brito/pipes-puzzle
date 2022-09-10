import { useEffect, useState } from 'react'

import Container from 'components/Container'
import Information from 'components/Information'
import Middleware from 'middleware/'

export default function App() {
  const [connection] = useState(new Middleware())
  const [isConnected, setIsConnected] = useState(false)
  const [currentLevel] = useState(4)

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
      <Information currentLevel={currentLevel} />
    </Container>
  )
}
