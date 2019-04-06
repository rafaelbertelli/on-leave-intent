class OnLeaveIntent {
  constructor(callback) {
    this.callback = callback

    this.init()
  }

  init = () => {
    this.handleMouseOut()
  }

  checkOutOfBounds = event => event.relatedTarget === null && this.callback()

  handleMouseOut() {
    document.addEventListener('mouseout', this.checkOutOfBounds)
  }
}

export default OnLeaveIntent
