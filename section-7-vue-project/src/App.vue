<template>
  <section>
    <header><h1>Friends list</h1></header>
    <add-new-friend-form @friend-added="addFriend" />
    <ul>
      <!-- ":key" is mandatory when using "for" in "components" -->
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :first-name="friend.name"
        :person-bio="friend.bio"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavorite"
        @friend-deleted="deleteFriend"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "abraham",
          name: "Abraham",
          bio: "Father of Faith",
          isFavorite: true,
        },
        {
          id: "jacob",
          name: "Jacob",
          bio: "Israel, son of Abraham",
          isFavorite: false,
        },
        {
          id: "jhon",
          name: "Jhon Baptist",
          bio: "The last Prophet",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendId) {
      const theFriend = this.friends.find((friend) => friend.id == friendId);
      theFriend.isFavorite = !theFriend.isFavorite;
    },
    addFriend(id, name, bio) {
      this.friends.push({
        id: id,
        name: name,
        bio: bio,
        isFavorite: false,
      });
    },
    deleteFriend(friendId) {
      // creating a new array with itens where friend.id != id
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
