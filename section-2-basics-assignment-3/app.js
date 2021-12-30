const app = Vue.createApp({
  data() {
    return {
      number: 0,
      result: "Not there yet",
    };
  },
  computed: {},
  watch: {
    number(value) {
      if (value < 37) {
        this.result = "Not there yet";
      } else if (value > 37) {
        this.result = "Too much!";
      } else {
        this.result = value;
      }
      console.log('Value: ' + value);
    },
    result() {
      const self = this;
      setTimeout(() => {
        self.number = 0;
      }, 5000);
    },
  },
  methods: {
    addFive() {
      this.number += 5;
    },
    addOne() {
      this.number++;
    },
  },
});

app.mount("#assignment");
