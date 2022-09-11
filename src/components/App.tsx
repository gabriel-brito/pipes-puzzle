import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

import Container from 'components/Container'
import Information from 'components/Information'
import GameWrapper from 'components/GameWrapper'
import Pipe from 'components/Pipe'
import Footer from 'components/Footer'

import { baseURL } from 'utils/constants'
import { transformIntoMap, verifyMessage } from 'utils/connection'
import { getMaxLevel, saveMaxLevel } from 'utils/localstorage'

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [maxLevel, setMaxLevel] = useState(() => getMaxLevel())
  const { sendMessage, lastMessage } = useWebSocket(baseURL as string, {
    onClose: () => setIsConnected(false),
    onOpen: () => {
      setIsConnected(true)
      sendMessage(`new ${currentLevel}`)
    },
    shouldReconnect: () => true
  })
  const [isConnected, setIsConnected] = useState(false)
  const [isFreeToGo, setIsFreeToGo] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)
  const [currentMap, setCurrentMap] = useState<string[][]>([])
  const thereIsAMap = currentMap.length > 0 || null
  const [gridColumnSize, setGridColumnSize] = useState(0)
  const [resultMessage, setResultMessage] = useState('')

  const handleLevelChoose = (level: number) => {
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
    setIsFreeToGo(false)

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

      if (nextLevelAllowed) console.log('here')
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
        isConnected={isConnected}
        hasStarted={hasStarted}
      >
        {thereIsAMap &&
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
          isFreeToGo={isFreeToGo}
          resultMessage={resultMessage}
        />
      )}
    </Container>
  )
}
