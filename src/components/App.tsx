import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

import Container from 'components/Container'
import Information from 'components/Information'
import GameWrapper from 'components/GameWrapper'
import Pipe from 'components/Pipe'

import { baseURL } from 'utils/constants'
import { transformIntoMap } from 'utils/connection'

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const { sendMessage, lastMessage } = useWebSocket(baseURL as string, {
    onClose: () => setIsConnected(false),
    onOpen: () => {
      setIsConnected(true)
      sendMessage(`new ${currentLevel}`)
    },
    shouldReconnect: () => true
  })
  const [isConnected, setIsConnected] = useState(false)
  const [currentMap, setCurrentMap] = useState<string[][]>([])
  const [gridColumnSize, setGridColumnSize] = useState(0)

  const handleLevelChoose = (level: number) => {
    setCurrentLevel(level)
    sendMessage(`new ${level}`)
  }

  const handleStartGame = () => {
    sendMessage('map')
  }

  useEffect(() => {
    if (lastMessage && lastMessage.data.includes('map')) {
      const map = transformIntoMap(lastMessage.data)
      setGridColumnSize(map[0].length)
      setCurrentMap(map)
    }
  }, [lastMessage])

  return (
    <Container>
      <Information
        currentLevel={currentLevel}
        handleLevelChoose={handleLevelChoose}
      />
      <GameWrapper
        gridColumnSize={gridColumnSize}
        handleStartGame={handleStartGame}
        isConnected={isConnected}
      >
        {currentMap.length > 0
          ? currentMap.map((pipes, rowIndex) =>
              pipes.map((pipe, pipeIndex) => (
                <Pipe key={`pipe-${rowIndex}-${pipeIndex}`}>{pipe}</Pipe>
              ))
            )
          : null}
      </GameWrapper>
    </Container>
  )
}
