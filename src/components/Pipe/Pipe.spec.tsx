import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'

import Pipe from '.'

const props = {
  symbol: 'xpto',
  rotate: jest.fn()
}

describe('Pipe', () => {
  it('should render properly', () => {
    render(<Pipe {...props} />)

    expect(screen.getByTestId('pipe')).toHaveAttribute('data-symbol', 'xpto')
    expect(screen.getByTestId('pipe')).toHaveStyleRule(
      'background',
      'url(/assets/images/tiles.png)'
    )
    expect(screen.getByTestId('pipe')).toMatchSnapshot()
  })

  it('should call a function when clicked', () => {
    render(<Pipe {...props} />)

    UserEvent.click(screen.getByTestId('pipe'))

    expect(props.rotate).toHaveBeenCalledTimes(1)
  })
})
