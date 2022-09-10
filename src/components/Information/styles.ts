import styled from 'styled-components'

type ButtonTypes = {
  isBlocked: boolean
  currentLevel: boolean
}

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 32px auto;
`

export const Heading = styled.h1`
  font-size: var(--headingSize);
  margin-bottom: 32px;
`

export const Levels = styled.nav`
  background-color: var(--bgContrast);
  border-radius: 8px;
  padding: 16px;
`

export const LevelList = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(6, 36px);
  list-style: none;
`

export const LevelListItem = styled.li`
  height: 45px;
`

export const Button = styled('button')<ButtonTypes>`
  background-color: ${(props) =>
    props.isBlocked ? 'var(--disabledBg)' : 'var(--buttonBg)'};
  background: ${(props) =>
    props.currentLevel
      ? 'linear-gradient(135deg, #ff80bf 0, #9580ff 100%)'
      : ''};
  border-radius: 8px;
  border: none;
  color: var(--buttonColor);
  cursor: ${(props) => (props.isBlocked ? 'initial' : 'pointer')};
  font-size: 600;
  height: 100%;
  opacity: ${(props) => (props.currentLevel ? '0.8' : 'initial')};
  width: 100%;

  &:hover {
    opacity: ${(props) => (props.isBlocked ? 'initial' : '0.7')};
  }
`
