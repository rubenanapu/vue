<template>
  <form>
    <input type="text" v-model="name" />
    <input type="text" v-model="bio" />
    <button @click.prevent="addFriend">Add Friend</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      bio: "",
    };
  },
  emits: {
    "friend-added": function (id, name, bio) {
      if (id && name && bio) {
        return true;
      }
      console.warn(
        'Have you passed all "id", "name", and "bio" on the emitter?'
      );
      return false;
    },
  },
  methods: {
    addFriend() {
      const id = this.name.split(" ")[0];
      this.$emit("friend-added", id, this.name, this.bio);
    },
  },
};
</script>
