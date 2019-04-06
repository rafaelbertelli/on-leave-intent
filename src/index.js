class OnLeaveIntent {
  constructor(callback) {
    this.callback = callback

    this.callback()
  }
}

export default OnLeaveIntent
