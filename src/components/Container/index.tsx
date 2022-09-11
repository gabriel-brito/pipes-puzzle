import * as S from './styles'

type ContainerTypes = {
  children: JSX.Element | JSX.Element[]
}

export default function Container({ children }: ContainerTypes) {
  return <S.Container data-testid="container">{children}</S.Container>
}
