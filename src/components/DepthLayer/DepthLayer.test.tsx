import { render, screen, cleanup } from '@testing-library/react'
import { it, describe, expect, afterEach, beforeEach } from 'vitest'
import { DepthLayer } from './index'

type DepthDecoratorTest = {
  depthLayer: HTMLElement
  styles: string
}

describe('testing DepthLayer component', () => {
  beforeEach<DepthDecoratorTest>((context) => {
    render(
      <DepthLayer>
        <button>press me!</button>
      </DepthLayer>
    )
    screen.debug()
    context.depthLayer = screen.getByRole('depth-decorator')
    context.styles = screen.getByRole('depth-decorator').getAttribute('class') ?? ''
  })

  afterEach(() => {
    cleanup()
  })

  it<DepthDecoratorTest>('component has to exists', ({ depthLayer }) => {
    expect(depthLayer).toBeDefined()
  })

  it<DepthDecoratorTest>('shouldnt containt hoverable styles', ({ styles }) => {
    expect(styles).not.toContain('hover:-translate-y-[2px] hover:shadow-2xl hover:brightness-95 duration-200 transition-all')
  })

  it<DepthDecoratorTest>('style has to match', ({ styles }) => {
    expect(styles).toMatch(`relative [&>span]:block [&>*]:rounded-[inherit] before:absolute before:rounded-[inherit] before:pointer-events-none before:inset-0 before:border-b after:absolute after:rounded-[inherit] after:pointer-events-none after:border-t after:inset-0 shadow before:border-black/40 after:border-white/50 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] before:opacity-100 after:opacity-100 rounded-lg overflow-hidden before:bg-[linear-gradient(rgba(255,255,255,0.15),rgba(0,0,0,0.15))]`)
  })
})

describe('testing DepthLayer component with hoverable variance', () => {
  it('shoul apply certain styles based on the variances', () => {
    render(
      <DepthLayer hoverable>
        <button>press me!</button>
      </DepthLayer>
    )
    screen.debug()
    const depthLayer = screen.getByRole('depth-decorator')
    const styles = depthLayer.getAttribute('class')
    expect(styles).toContain('hover:-translate-y-[2px] hover:shadow-2xl hover:brightness-95 duration-200 transition-all')
  })
})