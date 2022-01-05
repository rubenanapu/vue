<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  components: {
    // Registering components locally instead of globally in main.js
    // The three ways below work in the same way. They all have the same result.
    // Let's stick to the first option that is more verbose
    // When using two other options, the tag can be <the-header></the-header>
    // and <TheHeader />. You can use any of them.
    "the-header": TheHeader,
    // TheHeader: TheHeader,
    // TheHeader,
    BadgeList: BadgeList,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>