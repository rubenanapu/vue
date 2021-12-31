<template>
  <li>
    <h2>{{ firstName }} {{ isFriendFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleBio">{{ isVisible ? "Hide" : "Show" }} Bio</button>
    &nbsp;
    <button @click="toggleFavorite">(un)Favorite</button>
    <p v-if="isVisible">{{ personBio }}</p>
  </li>
</template>

<script>
export default {
  // Can be passed like first-name and peron-bio when calling <friend-contact />
  //   props: ["firstName", "personBio", "isFavorite"],
  //   props: {firstName:String, personBio: String, isFavorite: String},
  props: {
    firstName: { type: String, required: true },
    personBio: { type: String, required: true },
    isFavorite: {
      type: String,
      required: false,
      default: "0",
      validator: function (value) {
        return value === "0" || value === "1";
      },
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
      isFriendFavorite: this.isFavorite === "1", // using props as initial value
    };
  },
  methods: {
    toggleBio() {
      this.isVisible = !this.isVisible;
      // We can now use props (properties): this.firstName
    },
    toggleFavorite() {
      this.isFriendFavorite = !this.isFriendFavorite;
    },
  },
};
</script>
