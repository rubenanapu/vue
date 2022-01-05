<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// slots are used when we want a wrapper that can be easily reused in
// different places to insert Vue code
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>