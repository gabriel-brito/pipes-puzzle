import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

import Container from 'components/Container'
import Information from 'components/Information'

import { baseURL } from 'utils/constants'

export default function App() {
  const { sendMessage, lastMessage } = useWebSocket(baseURL as string, {
    onClose: () => setIsConnected(false),
    onOpen: () => setIsConnected(true),
    shouldReconnect: () => true
  })
  const [isConnected, setIsConnected] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentData, setCurrentData] = useState<MessageEvent<unknown>>()

  const handleLevelChoose = (level: number) => {
    setCurrentLevel(level)
    sendMessage(`new ${level}`)
  }

  useEffect(() => {
    if (lastMessage) {
      setCurrentData(lastMessage)
    }
  }, [lastMessage])

  return (
    <Container>
      <Information
        currentLevel={currentLevel}
        handleLevelChoose={handleLevelChoose}
      />
    </Container>
  )
}
