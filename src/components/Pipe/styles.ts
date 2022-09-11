import styled from 'styled-components'

export const Pipe = styled.span`
  align-items: center;
  background: url(/assets/images/tiles.png);
  cursor: pointer;
  display: flex;
  font-size: 24px;
  height: 60px;
  justify-content: center;
  width: 60px;

  &:hover {
    opacity: 0.7;
    border: 1px solid white;
  }

  &[data-symbol='╸'] {
    background-position: 120px 0px;
  }
  &[data-symbol='╹'] {
    background-position: -60px -60px;
  }
  &[data-symbol='╺'] {
    background-position: 60px 0px;
  }
  &[data-symbol='╻'] {
    background-position: 60px -60px;
  }
  &[data-symbol='━'] {
    background-position: 0px 0px;
  }
  &[data-symbol='┃'] {
    background-position: 0px -60px;
  }
  &[data-symbol='┓'] {
    background-position: 120px 60px;
  }
  &[data-symbol='┛'] {
    background-position: 120px 120px;
  }
  &[data-symbol='┗'] {
    background-position: 60px 120px;
  }
  &[data-symbol='┏'] {
    background-position: 0px 60px;
  }
  &[data-symbol='┣'] {
    background-position: 0px -120px;
  }
  &[data-symbol='┳'] {
    background-position: 60px 60px;
  }
  &[data-symbol='┫'] {
    background-position: 60px -120px;
  }
  &[data-symbol='┻'] {
    background-position: 120px -120px;
  }
  &[data-symbol='╋'] {
    background-position: 0px 120px;
  }
`
