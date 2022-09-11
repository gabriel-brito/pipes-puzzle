import * as S from './styles'

type FooterTypes = {
  handleNextLevel: () => void
  handleVerify: () => void
  isNextLevelAllowed: boolean
  resultMessage?: string
}

export default function Footer({
  handleNextLevel,
  handleVerify,
  isNextLevelAllowed,
  resultMessage
}: FooterTypes) {
  return (
    <S.Wrapper data-testid="footer">
      {resultMessage && <S.Information>{resultMessage}</S.Information>}

      {!isNextLevelAllowed ? (
        <S.Button onClick={handleVerify} aria-label="verify-solution-button">
          Verify Solution
        </S.Button>
      ) : (
        <S.Button onClick={handleNextLevel} aria-label="next-level-button">
          Next Level
        </S.Button>
      )}
    </S.Wrapper>
  )
}
