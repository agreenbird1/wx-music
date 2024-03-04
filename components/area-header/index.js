Component({
  properties: {
    title: {
      type: String
    },
    rightText: {
      type: String,
      value: "更多"
    }
  },
  methods: {
    rightTextClick() {
      this.triggerEvent("right-text-click")
    }
  }
})