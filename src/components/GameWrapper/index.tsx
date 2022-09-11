import * as S from './styles'

type GameWrapperTypes = {
  children?: JSX.Element | JSX.Element[][] | null
  gridColumnSize: number
  handleStartGame: () => void
  isConnected: boolean
}

export default function GameWrapper({
  children,
  gridColumnSize,
  handleStartGame,
  isConnected
}: GameWrapperTypes) {
  return (
    <S.Wrapper>
      <S.Information>
        {isConnected
          ? 'The game is connected and ready to play!'
          : 'Loading...'}
      </S.Information>

      {children && (
        <S.PipesWrapper gridColumnSize={gridColumnSize}>
          {children}
        </S.PipesWrapper>
      )}

      {isConnected && <S.Button onClick={handleStartGame}>Start Game</S.Button>}
    </S.Wrapper>
  )
}
