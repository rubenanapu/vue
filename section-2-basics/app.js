const app = Vue.createApp({
  data() {
    return {
      courseGoal1: "Finish the course and learn Vue!",
      courseGoal2: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org",
      pureHtml: 'This is a <i style="color: red">Pure HTML</i> variable. Be careful!'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.courseGoal1;
      }

      return this.courseGoal2;
    },
  },
});

app.mount("#user-goal");
