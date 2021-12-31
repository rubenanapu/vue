<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleBio">{{ isVisible ? "Hide" : "Show" }} Bio</button>
    <p v-if="isVisible">{{ friend.bio }}</p>
  </li>
</template>

<script>
export default {
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
    },
  },
};
</script>
