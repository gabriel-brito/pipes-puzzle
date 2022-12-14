import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

import Container from 'components/Container'
import Information from 'components/Information'
import GameWrapper from 'components/GameWrapper'
import Pipe from 'components/Pipe'
import Footer from 'components/Footer'

import { baseURL } from 'utils/constants'
import { transformIntoMap, verifyMessage } from 'utils/connection'
import { getMaxLevel, saveMaxLevel } from 'utils/localStorage'

export default function App() {
  const { sendMessage, lastMessage } = useWebSocket(baseURL as string, {
    onClose: () => setIsConnected(false),
    onOpen: () => {
      setIsConnected(true)
      sendMessage(`new ${currentLevel}`)
    },
    shouldReconnect: () => true
  })
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentMap, setCurrentMap] = useState<string[][]>([])
  const [gridColumnSize, setGridColumnSize] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isNextLevelAllowed, setIsNextLevelAllowed] = useState(false)
  const [maxLevel, setMaxLevel] = useState(() => getMaxLevel())
  const [resultMessage, setResultMessage] = useState('')
  const hasMap = currentMap.length > 0 || null

  const handleLevelChoose = (level: number) => {
    if (level === currentLevel) return

    setCurrentLevel(level)
    sendMessage(`new ${level}`)
    sendMessage('map')
    setResultMessage('')
    setHasStarted(true)
  }

  const handleStartGame = () => {
    sendMessage('map')

    setHasStarted(true)
  }

  const handleRotate = (x: number, y: number) => {
    sendMessage(`rotate ${x} ${y}`)

    sendMessage('map')
  }

  const handleVerify = () => sendMessage('verify')

  const handleNextLevel = () => {
    const newLevel = currentLevel + 1
    setIsNextLevelAllowed(false)

    setCurrentLevel(newLevel)
    setMaxLevel(newLevel)
    handleLevelChoose(newLevel)
  }

  useEffect(() => {
    if (lastMessage && lastMessage.data.includes('map')) {
      const map = transformIntoMap(lastMessage.data)
      setGridColumnSize(map[0].length)
      setCurrentMap(map)
    }

    if (lastMessage && lastMessage.data.includes('verify')) {
      const { message, nextLevelAllowed } = verifyMessage(lastMessage.data)

      setResultMessage(message)

      if (nextLevelAllowed) setIsNextLevelAllowed(nextLevelAllowed)
    }
  }, [lastMessage])

  useEffect(() => {
    saveMaxLevel(maxLevel)
  }, [maxLevel])

  return (
    <Container>
      <Information
        currentLevel={currentLevel}
        handleLevelChoose={handleLevelChoose}
        maxLevel={maxLevel}
      />

      <GameWrapper
        gridColumnSize={gridColumnSize}
        handleStartGame={handleStartGame}
        hasStarted={hasStarted}
        isConnected={isConnected}
      >
        {hasMap &&
          currentMap.map((pipes, rowIndex) =>
            pipes.map((pipe, pipeIndex) => (
              <Pipe
                key={`pipe-${rowIndex}-${pipeIndex}`}
                symbol={pipe}
                rotate={() => handleRotate(pipeIndex, rowIndex)}
              />
            ))
          )}
      </GameWrapper>

      {hasStarted && (
        <Footer
          handleNextLevel={handleNextLevel}
          handleVerify={handleVerify}
          isNextLevelAllowed={isNextLevelAllowed}
          resultMessage={resultMessage}
        />
      )}
    </Container>
  )
}
