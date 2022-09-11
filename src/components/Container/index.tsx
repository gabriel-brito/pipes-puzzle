import { ReactNode } from 'react'
import * as S from './styles'

type ContainerTypes = {
  children: ReactNode
}

export default function Container({ children }: ContainerTypes) {
  return <S.Container data-testid="container">{children}</S.Container>
}
