const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      isVisible: true,
      bgColor: "white",
    };
  },
  computed: {
    cssClass() {
      if (this.userInput === "user1" || this.userInput === "user2") {
        return this.userInput;
      }
      return "";
    },
    visibleInvisible() {
      if (this.isVisible) {
        return "visible";
      }
      return "hidden";
    },
  },
  methods: {
    toggleParagraph() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
