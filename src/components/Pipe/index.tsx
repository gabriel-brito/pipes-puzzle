import * as S from './styles'

type PipeTypes = {
  symbol: string
  rotate: () => void
}

export default function Pipe({ symbol, rotate }: PipeTypes) {
  return <S.Pipe data-symbol={symbol} onClick={rotate} data-testid="pipe" />
}
