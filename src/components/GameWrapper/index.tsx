import { ReactNode } from 'react'
import * as S from './styles'

type GameWrapperTypes = {
  children?: ReactNode
  gridColumnSize: number
  handleStartGame: () => void
  isConnected: boolean
  hasStarted: boolean
}

export default function GameWrapper({
  children,
  gridColumnSize,
  handleStartGame,
  hasStarted,
  isConnected
}: GameWrapperTypes) {
  const message = isConnected
    ? 'The game is connected and ready to play!'
    : 'Loading...'

  return (
    <S.Wrapper data-testid="game-wrapper">
      <S.Information>{message}</S.Information>

      {children && (
        <S.PipesWrapper gridColumnSize={gridColumnSize}>
          {children}
        </S.PipesWrapper>
      )}

      {isConnected && !hasStarted && (
        <S.Button onClick={handleStartGame} aria-label="start-game-button">
          Start Game
        </S.Button>
      )}
    </S.Wrapper>
  )
}
