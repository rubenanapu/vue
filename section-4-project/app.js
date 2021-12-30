function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      enemyHealth: 100,
      playerHealth: 100,
      round: 0,
      winner: null,
    };
  },
  computed: {
    enemyCss() {
      if (this.enemyHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.enemyHealth + "%" };
    },
    playerCss() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.round % 3 !== 0;
    },
  },
  watch: {
    enemyHealth(value) {
      if (value <= 0) {
        if (this.playerHealth <= 0) {
          this.winner = "draw";
        } else {
          this.winner = "player";
        }
      }
    },
    playerHealth(value) {
      if (value <= 0) {
        if (this.enemyHealth <= 0) {
          this.winner = "draw";
        } else {
          this.winner = "enemy";
        }
      }
    },
  },
  methods: {
    startNewGame() {
      this.enemyHealth = 100;
      this.playerHealth = 100;
      this.round = 0;
      this.winner = null;
    },
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
    healPlayer() {
      const health = getRandom(10, 20);
      this.playerHealth += health;
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.attackPlayer();
    },
    surrender() {
      alert(
        "Surrender does not exist in the vocabulary.\nGo back to the fight!"
      );
    },
  },
});

app.mount("#goal");
