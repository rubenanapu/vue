<template>
  <!-- UserData should output two input fields => for name and age -->
  <section>
    <form @submit.prevent="$emit('user-added', username, age)">
      <label for="username">Username</label>
      <input
        type="text"
        name="username"
        v-model="username"
        placeholder="your username"
      />
      <label for="age">Username</label>
      <input type="number" name="age" v-model="age" placeholder="your age" />
      <button>Add user</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: "",
    };
  },
  events: ["user-added"],
};
</script>
