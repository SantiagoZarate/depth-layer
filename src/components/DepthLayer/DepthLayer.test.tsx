import { render, screen } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import { DepthLayer } from './index'

describe('testing DepthLayer component', () => {
  it('component has to exists', () => {
    render(
      <DepthLayer>
        <button>press me!</button>
      </DepthLayer>
    )
    screen.debug()
    const depthLayer = screen.getAllByRole('button')
    expect(depthLayer).toBeDefined()
  })
})