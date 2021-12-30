const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      incrementBy: 7,
      name: "to be set",
      fullName: "to be set",
      enterPressedValue: "",
      twoWayBinding: "",
      duplicatedName: "",
    };
  },
  computed: {
    // called only when specific dependencies (this.name) changes (ideal for outputting).
    // If we deal with many fields, "computed" is better than many "watch"es
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " Nascimento";
    },
  },
  watch: {
    // watch "data" and "computed" properties changes
    name(newValue, oldValue) {
      this.duplicatedName = newValue + newValue;
    },
  },
  methods: {
    //called whenever ANYthing in the page is changed (not ideal for outputting, but ideal for v-on:*)
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
    enterPressed(event) {
      this.enterPressedValue = '<i style="color: red">Enter Pressed</i>';
    },
  },
});

app.mount("#events");
