class Reio {
  constructor(initialState) {
    this.store = {...initialState}
  }

  add(state) {
    for (const [key, value] of Object.entries(state)) {
      this.store = {...this.store, [key]: value}
    }
    return this.store
  }

  set(state) {
    for (const [key, value] of Object.entries(state)) {
      this.store = {...this.store, [key]: value}
    }
    return this.store
  }

  get() {
    return {store: this.store}
  }
}

export default Reio
