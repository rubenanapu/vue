const app = Vue.createApp({
  data() {
    return {
      aSelected: false,
      bSelected: false,
      cSelected: false,
      dSelected: false,
    };
  },
  computed: {
    boxcClasses() {
      return { activated: this.cSelected };
    },
    boxdClasses() {
      return { activated: this.dSelected };
    },
  },
  methods: {
    boxSelected(box) {
      this.aSelected = this.bSelected = this.cSelected = this.dSelected = false;

      if (box === "A") {
        this.aSelected = true;
      } else if (box === "B") {
        this.bSelected = true;
      } else if (box === "C") {
        this.cSelected = true;
      }else if (box === 'D'){
          this.dSelected = true;
      }
    },
  },
});

app.mount("#styling");
