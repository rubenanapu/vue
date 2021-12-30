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
      logs: [],
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
      this.logs = [];
    },
    attackEnemy() {
      const damage = getRandom(7, 12);
      this.enemyHealth -= damage;
      this.addLog("player", "attack", damage);
      this.attackPlayer();
    },
    attackPlayer() {
      this.round++;
      const damage = getRandom(8, 16);
      this.playerHealth -= damage;
      this.addLog("enemy", "attack", damage);
    },
    specialAttack() {
      const damage = getRandom(15, 25);
      this.enemyHealth -= damage;
      this.addLog("player", "special-attack", damage);
      this.attackPlayer();
    },
    healPlayer() {
      const health = getRandom(10, 20);
      this.playerHealth += health;
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.addLog("player", "heal", health);
      this.attackPlayer();
    },
    surrender() {
      alert(
        "Surrender does not exist in the vocabulary.\nGo back to the fight!"
      );
      this.addLog("player", "did-not-surrender", "");
    },
    addLog(who, what, value) {
      this.logs.unshift({ who: who, what: what, value: value });
    },
  },
});

app.mount("#goal");
