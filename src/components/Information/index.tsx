import * as S from './styles'

type InformationTypes = {
  currentLevel: number
  handleLevelChoose: (level: number) => void
  maxLevel: number
}

export default function Information({
  currentLevel,
  handleLevelChoose,
  maxLevel
}: InformationTypes) {
  const levels = [1, 2, 3, 4, 5, 6]

  return (
    <S.Wrapper data-testid="information-wrapper">
      <S.Heading>Pipes Puzzle</S.Heading>

      <S.Levels>
        <S.Subtitle>Choose your level!</S.Subtitle>

        <S.LevelList>
          {levels.map((level) => {
            const isCurrentLevel = level === currentLevel
            const isBlocked = level > maxLevel
            const handleLevel = () => handleLevelChoose(level)

            return (
              <S.LevelListItem key={`level-${level}`}>
                <S.Button
                  aria-label="select-level-button"
                  currentLevel={isCurrentLevel}
                  disabled={isBlocked}
                  isBlocked={isBlocked}
                  onClick={handleLevel}
                >
                  {level}
                </S.Button>
              </S.LevelListItem>
            )
          })}
        </S.LevelList>

        <S.Subtitle>Current level: {currentLevel}</S.Subtitle>
      </S.Levels>
    </S.Wrapper>
  )
}
