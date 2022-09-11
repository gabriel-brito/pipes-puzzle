import * as S from './styles'

type GameWrapperTypes = {
  children?: JSX.Element | JSX.Element[][] | null
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
    <S.Wrapper>
      <S.Information>{message}</S.Information>

      {children && (
        <S.PipesWrapper gridColumnSize={gridColumnSize}>
          {children}
        </S.PipesWrapper>
      )}

      {isConnected && !hasStarted && (
        <S.Button onClick={handleStartGame}>Start Game</S.Button>
      )}
    </S.Wrapper>
  )
}
