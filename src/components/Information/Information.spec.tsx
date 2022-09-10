import { screen, render } from '@testing-library/react'
import Information from '.'
import 'jest-styled-components'

describe('Information', () => {
  it('should render properly', () => {
    render(<Information currentLevel={3} />)

    expect(
      screen.getByRole('heading', { name: /pipes puzzle/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /choose your level/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /current level/i })
    ).toBeInTheDocument()
    expect(screen.queryAllByLabelText('select-level-button')).toHaveLength(6)

    expect(screen.getByTestId('information-wrapper')).toMatchSnapshot()
  })

  it('should have two disabled buttons', () => {
    render(<Information currentLevel={4} />)
    let disabled = 0

    const buttons = screen.queryAllByLabelText('select-level-button')

    buttons.forEach((button) => {
      if (button.hasAttribute('disabled')) disabled += 1
    })

    expect(disabled).toBe(2)
  })
})
