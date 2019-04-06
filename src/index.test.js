import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  it('should return 5', () => {
    expect(5).toBe(5)
  })

  it('should call a callback function if user go out of the screen', () => {
    const callback = jest.fn()
    const onLeaveIntent = new OnLeaveIntent(callback)

    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))

    expect(callback).toHaveBeenCalled()
  })

  it('should not call a callback function if user stills on the screen', () => {
    const callback = jest.fn()
    const onLeaveIntent = new OnLeaveIntent(callback)

    // simulate the user on the page
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )

    expect(callback).not.toHaveBeenCalled()
  })
})
