import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  it('should return 5', () => {
    expect(5).toBe(5)
  })

  it('should call a callback function if user go out of the screen', () => {
    const callback = jest.fn()

    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))

    expect(callback).toHaveBeenCalled()
  })
})
