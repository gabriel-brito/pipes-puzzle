import { useEffect, useState } from 'react'

import Container from 'components/Container'
import Middleware from 'middleware/'

export default function App() {
  const [connection] = useState(new Middleware())

  useEffect(() => {
    connection.init()
  }, [connection])

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  )
}
