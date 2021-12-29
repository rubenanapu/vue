const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      incrementBy: 7,
    };
  },
  methods: {
    incrementCounter(number) {
      this.counter += number;
    },
    decrementCounter(number) {
      this.counter -= number;
    },
  },
});

app.mount("#events");
