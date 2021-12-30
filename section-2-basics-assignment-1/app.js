const app = Vue.createApp({
  data() {
    return {
      name: "Ruben Alves",
      age: "34",
      imageUrl:
        "https://previews.123rf.com/images/chudson374/chudson3741805/chudson374180500034/101174875-jesus-said-to-him-%C3%A2%E2%82%AC%C5%93i-am-the-way-the-truth-and-the-life-no-one-comes-to-the-father-except-through-m.jpg",
      book: "Holy Bible",
    };
  },
  methods: {
    agePlusFive() {
      return Math.trunc(this.age) + 5;
    },
    randomNumberBeteween0And1() {
      return Math.trunc((Math.random() * 1000) % 2);
    },
  },
});

app.mount("#assignment");
