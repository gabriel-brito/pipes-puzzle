import * as S from './styles'

type PipeTypes = {
  symbol: string
}

export default function Pipe({ symbol }: PipeTypes) {
  return <S.Pipe data-symbol={symbol} />
}
