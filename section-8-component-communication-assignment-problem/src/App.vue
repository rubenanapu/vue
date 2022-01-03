<template>
  <!--  Task 2: Output both components side-by-side in your main App template -->
  <div>
    <user-data @user-added="addUser" />
    <div v-if="users.length > 0">
      <active-user v-for="user in users" :key="user.username" v-bind="user">
      </active-user>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(username, age) {
      this.users.push({
        username: username,
        age: age,
      });
    },
  },
};
</script>
