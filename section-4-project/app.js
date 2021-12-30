function getRandom(min, max) {
  Math.round(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      enemyHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    attackEnemy() {
      const damage = getRandom(7, 12);
      self.enemyHealth -= damage;
      self.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandom(7, 12);
      self.playerHealth -= damage;
    },
  },
});

app.mount("#goal");
