import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Container from '.'

function ExampleHeading() {
  return <h1>Example Heading</h1>
}

describe('Container', () => {
  it('should match snapshot', () => {
    render(
      <Container>
        <ExampleHeading />
      </Container>
    )

    expect(screen.getByTestId('container')).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 0 auto;
        max-width: 1280px;
        padding: 0 20px;
        width: 100%;
      }

      <div
        class="c0"
        data-testid="container"
      >
        <h1>
          Example Heading
        </h1>
      </div>
    `)
  })

  it('should have rendered heading correctly', () => {
    render(
      <Container>
        <ExampleHeading />
      </Container>
    )

    expect(
      screen.getByRole('heading', { name: /example heading/i })
    ).toBeInTheDocument()
  })

  it('should have maximum width as 1280px', () => {
    render(
      <Container>
        <ExampleHeading />
      </Container>
    )

    expect(screen.getByTestId('container')).toHaveStyleRule(
      'max-width',
      '1280px'
    )
  })
})
