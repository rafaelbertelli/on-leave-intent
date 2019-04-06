import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  let callback
  let onLeaveIntent

  beforeEach(() => {
    callback = jest.fn()
    onLeaveIntent = new OnLeaveIntent(callback)
  })

  it('should call a callback function if user go out of the screen', () => {
    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).toHaveBeenCalled()
  })

  it('should not call a callback function if user stills on the screen', () => {
    // simulate the user on the page
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )
    expect(callback).not.toHaveBeenCalled()
  })
})
