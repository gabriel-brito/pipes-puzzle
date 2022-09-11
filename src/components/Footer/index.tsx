import * as S from './styles'

type FooterTypes = {
  handleNextLevel: () => void
  handleVerify: () => void
  isFreeToGo: boolean
  resultMessage?: string
}

export default function Footer({
  handleNextLevel,
  handleVerify,
  isFreeToGo,
  resultMessage
}: FooterTypes) {
  return (
    <S.Wrapper>
      {resultMessage && <S.Information>{resultMessage}</S.Information>}

      {!isFreeToGo ? (
        <S.Button onClick={handleVerify}>Verify Solution</S.Button>
      ) : (
        <S.Button onClick={handleNextLevel}>Next Level</S.Button>
      )}
    </S.Wrapper>
  )
}
