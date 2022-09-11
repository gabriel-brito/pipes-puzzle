import styled from 'styled-components'

type PipesWrapperTypes = {
  gridColumnSize: number
}

export const Wrapper = styled.section`
  align-items: center;
  background-color: var(--bgContrast);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 32px auto;
  padding: 16px;
  width: fit-content;
`

export const Information = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

export const PipesWrapper = styled('div')<PipesWrapperTypes>`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(${(props) => props.gridColumnSize}, 40px);
  margin-bottom: 24px;
  padding: 0 16px;
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
  margin: 16px auto;
  width: 128px;
}

  &:hover {
    opacity: 0.7;
  }
`
