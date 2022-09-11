import * as S from './styles'

type PipeTypes = {
  children: JSX.Element | string
}

export default function Pipe({ children }: PipeTypes) {
  return <S.Pipe>{children}</S.Pipe>
}
