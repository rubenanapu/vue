const app = Vue.createApp({
  data() {
    return {
      aSelected: false,
      bSelected: false,
      cSelected: false,
    };
  },
  computed: {
    boxcClasses() {
      return { activated: this.cSelected };
    },
  },
  methods: {
    boxSelected(box) {
      this.aSelected = this.bSelected = this.cSelected = false;

      if (box === "A") {
        this.aSelected = true;
      } else if (box === "B") {
        this.bSelected = true;
      } else if (box === "C") {
        this.cSelected = true;
      }
    },
  },
});

app.mount("#styling");
