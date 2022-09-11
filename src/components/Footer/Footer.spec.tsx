import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'

import Footer from '.'

const props = {
  handleNextLevel: jest.fn(),
  handleVerify: jest.fn(),
  isNextLevelAllowed: false,
  resultMessage: ''
}

describe('Footer', () => {
  it('should render properly', () => {
    render(<Footer {...props} />)

    expect(
      screen.getByRole('button', { name: /verify-solution-button/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toMatchSnapshot()
  })

  it('should call the handleVerify func when isNextLevelAllowed is false', () => {
    render(<Footer {...props} />)

    const button = screen.getByRole('button', {
      name: /verify-solution-button/i
    })

    UserEvent.click(button)

    expect(props.handleVerify).toHaveBeenCalledTimes(1)
  })

  it('should call the handleNextLevel func when isNextLevelAllowed is true', () => {
    render(<Footer {...props} isNextLevelAllowed={true} />)

    const button = screen.getByRole('button', {
      name: /next-level-button/i
    })

    UserEvent.click(button)

    expect(props.handleNextLevel).toHaveBeenCalledTimes(1)
  })

  it('should show the result message', () => {
    render(<Footer {...props} resultMessage="Correct!" />)

    expect(
      screen.getByRole('heading', { name: /Correct/i })
    ).toBeInTheDocument()
  })
})
