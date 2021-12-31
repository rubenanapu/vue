<template>
  <section>
    <h2>Friends list</h2>
    <ul>
      <friend-contact />
      <friend-contact />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "jhon",
          name: "Jhon Baptist",
          bio: "The Prophet",
        },
      ],
    };
  },
};
</script>
