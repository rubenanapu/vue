const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      incrementBy: 7,
      name: "to be set",
      fullName: "to be set",
    };
  },
  methods: {
    incrementCounter(number) {
      this.counter += number;
    },
    decrementCounter(number) {
      this.counter -= number;
    },
    updateName(event) {
      this.name = event.target.value;
    },
    setFullName(event, lastName) {
      this.fullName = event.target.value + " " + lastName;
    },
    submitForm(event) {
      // event.preventDefault() was replaced with v-on:submit.prevent
      alert("Submitted (and page not reloaded because of v-on:submit.prevent)");
    },
  },
});

app.mount("#events");
