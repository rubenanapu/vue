<template>
  <section>
    <base-card-slot>
      <template v-slot:myNamedSlot>
        <!-- "v-slot:myNamedSlot" can be replaced just with "#myNamedSlot"
        it works the same way
        -->
        <header>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </header>
      </template>
      <template>
        <!-- We could omit the <template> here and the <p> below would
          go to the default "v-slot:default". "default" is a reserved name
           -->
        <p>{{ infoText }}</p>
      </template>
    </base-card-slot>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>