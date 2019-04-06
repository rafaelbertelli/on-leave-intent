class OnLeaveIntent {
  constructor(callback, delay) {
    this.callback = callback
    this.delay = delay

    this.init()
  }

  init = () => {
    window.setTimeout(this.handleMouseOut, this.delay)
  }

  checkOutOfBounds = event => event.relatedTarget === null && this.callback()

  handleMouseOut = () => {
    document.addEventListener('mouseout', this.checkOutOfBounds)
  }
}

export default OnLeaveIntent
