const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      tasks: [],
      isVisible: true,
    };
  },
  computed: {
    howShowTxt() {
      if (this.isVisible) {
        return "Hide List";
      }
      return "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    hideShowList() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
