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
  max-width: 1280px;
  padding: 16px;
  width: fit-content;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Information = styled.h2`
  font-size: 14px;
  margin-bottom: 24px;
`

export const PipesWrapper = styled('div')<PipesWrapperTypes>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridColumnSize}, 60px);
  margin-bottom: 24px;
  overflow: scroll;
  padding: 16px;
  width: 100%;
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
  margin-bottom: 16px;
  width: 128px;
}

  &:hover {
    opacity: 0.7;
  }
`
