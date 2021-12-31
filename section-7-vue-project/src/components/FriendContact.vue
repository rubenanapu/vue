<template>
  <li>
    <h2>{{ firstName }}</h2>
    <button @click="toggleBio">{{ isVisible ? "Hide" : "Show" }} Bio</button>
    <p v-if="isVisible">{{ personBio }}</p>
  </li>
</template>

<script>
export default {
  props: ["firstName", "personBio"], // Can be passed like first-name and peron-bio when calling <friend-contact />
  data() {
    return {
      isVisible: false,
      friend: {
        id: "savior",
        name: "Jesus Christ",
        bio: "The Savior",
      },
    };
  },
  methods: {
    toggleBio() {
      this.isVisible = !this.isVisible;
      // We can now use props (properties): this.firstName
    },
  },
};
</script>
