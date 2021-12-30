const app = Vue.createApp({
  data() {
    return {
      enteredText: "",
      textAfterEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("Jesus loves you!");
    },
    updateText(event) {
      this.enteredText = event.target.value;
    },
    onClickEnter(event) {
      this.textAfterEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
