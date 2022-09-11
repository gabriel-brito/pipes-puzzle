import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import GameWrapper from '.'

const props = {
  gridColumnSize: 5,
  handleStartGame: jest.fn(),
  hasStarted: false,
  isConnected: true
}

describe('GameWrapper', () => {
  it('should render properly', () => {
    render(<GameWrapper {...props} />)

    expect(
      screen.getByRole('heading', { name: /The game is connected/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /start-game-button/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('game-wrapper')).toMatchSnapshot()
  })

  it('should render with a different message', () => {
    render(<GameWrapper {...props} isConnected={false} />)

    expect(
      screen.getByRole('heading', { name: /Loading/i })
    ).toBeInTheDocument()
  })

  it('should render with children', () => {
    const Span = () => <span data-testid="test-span">Hello World</span>
    render(<GameWrapper {...props}>{Span()}</GameWrapper>)

    expect(screen.getByTestId('test-span')).toBeInTheDocument()
  })

  it('should render without the button', () => {
    render(<GameWrapper {...props} hasStarted={true} />)

    expect(
      screen.queryByRole('button', { name: /start-game-button/i })
    ).not.toBeInTheDocument()
  })
})
