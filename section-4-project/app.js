function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      enemyHealth: 100,
      playerHealth: 100,
      round: 0,
    };
  },
  computed: {
    enemyCss() {
      return { width: this.enemyHealth + "%" };
    },
    playerCss() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.round % 3 !== 0;
    },
  },
  methods: {
    attackEnemy() {
      const damage = getRandom(7, 12);
      this.enemyHealth -= damage;
      this.attackPlayer();
    },
    attackPlayer() {
      this.round++;
      const damage = getRandom(8, 16);
      this.playerHealth -= damage;
    },
    specialAttack() {
      const damage = getRandom(15, 25);
      this.enemyHealth -= damage;
      this.attackPlayer();
    },
  },
});

app.mount("#goal");
