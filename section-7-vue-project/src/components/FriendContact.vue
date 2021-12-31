<template>
  <li>
    <h2>{{ firstName }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleBio">{{ isVisible ? "Hide" : "Show" }} Bio</button>
    &nbsp;
    <button @click="toggleFavorite">(un)Favorite</button>
    <p v-if="isVisible">{{ personBio }}</p>
  </li>
</template>

<script>
export default {
  // Can be passed like first-name and peron-bio when calling <friend-contact />
  // https://v3.vuejs.org/guide/component-props.html#passing-static-or-dynamic-props
  //
  //   props: ["firstName", "personBio", "isFavorite"],
  //   props: {firstName:String, personBio: String, isFavorite: String},
  props: {
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    personBio: { type: String, required: true },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      //   validator: function (value) {
      //     return value === "0" || value === "1";
      //   },
    },
  },
  //   emits: ['toggle-favorite'], // Simpler way
  emits: {
    // More weell-defined way of defining events
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      }
      console.warn("Emitter needs to provide 'id' parameter");
      return false;
    },
  },
  data() {
    return {
      isVisible: false,
      friend: {
        id: "savior",
        name: "Jesus Christ",
        bio: "The Savior",
      },
      //   isFriendFavorite: this.isFavorite, // using props as initial value
    };
  },
  methods: {
    toggleBio() {
      this.isVisible = !this.isVisible;
      // We can now use props (properties): this.firstName
    },
    toggleFavorite() {
      //   this.isFriendFavorite = !this.isFriendFavorite;

      // We can give the event the name we want. We can also send as many args
      // as we want to the listeners
      this.$emit("toggle-favorite", this.id);

      // Below we don't provide an id. The toggle-event defined in "emits"
      // will raise an error when the code below is called
      //   this.$emit("toggle-favorite");
    },
  },
};
</script>
