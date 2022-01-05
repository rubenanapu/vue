<template>
  <div>
    <header v-if="$slots.myNamedSlot">
      <!-- The v-if above is to not render anything if no content is
        passsed wen this <base-card-slot> is instantiated.
        If there is no data and let's suppose we don't have the ""This is the Default header"
        below, then it makes sense not to load it. -->
      <slot name="myNamedSlot">
        <h2>This is the default Header</h2>
      </slot>
    </header>
    <!-- When there is no name in slot, the name is "default" by default
    We can only have ONE unnammed slot
    -->
    <slot></slot>
  </div>
</template>

<script>
// slots are used when we want a wrapper that can be easily reused in
// different places to insert Vue code
export default {
  mounted() {
    console.log("The slots:");
    console.log(this.$slots);
    // console.log(this.$slots.myNamedSlot);
    // console.log(this.$slots.default);
  },
};
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