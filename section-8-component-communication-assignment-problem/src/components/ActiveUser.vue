<template>
  <section>
    <!-- // ActiveUser should output a username (h2) and age (h3) -->
    <h2>{{ username }}</h2>
    <h3>{{ age }} years old</h3>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["username", "age"],
};
</script>
