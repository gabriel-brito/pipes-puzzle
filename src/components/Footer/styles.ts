import styled from 'styled-components'

export const Wrapper = styled.footer`
  align-items: center;
  background-color: var(--bgContrast);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 32px;
  padding: 16px;
  width: fit-content;
`

export const Information = styled.h2`
  font-size: 16px;
  margin: 0 auto 16px;
  text-align: center;
`

export const Button = styled.button`
  background-color: var(--buttonBg);
  background: linear-gradient(135deg, #ff80bf 0, #9580ff 100%);
  border-radius: 8px;
  border: none;
  color: var(--buttonColor);
  cursor: pointer;
  font-size: 16px;
  font-size: 600;
  font-weight: 900;
  height: 48px;
  width: 200px;

  &:hover {
    opacity: 0.7;
  }
`
