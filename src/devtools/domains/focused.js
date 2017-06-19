class Focused {
  getInitialState() {
    return null
  }

  focus(_old, id) {
    return id
  }

  register() {
    return {
      ['checkout']: this.focus,
      ['detail']: this.focus
    }
  }
}

export default Focused
