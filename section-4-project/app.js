function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      enemyHealth: 100,
      playerHealth: 100,
    };
  },
  computed: {
    enemyCss() {
      return { width: this.enemyHealth + "%" };
    },
    playerCss() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackEnemy() {
      const damage = getRandom(7, 12);
      this.enemyHealth -= damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandom(8, 16);
      this.playerHealth -= damage;
    },
  },
});

app.mount("#goal");
