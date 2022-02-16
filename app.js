const game = {
  data() {
    return {
      newGame: false,
      points: 0,
      timer: 30,

      popped1: false,
      popped2: false,
      popped3: false,
      popped4: false,
      popped5: false,
      popped6: false,
      popped7: false,
      popped8: false,
      popped9: false,
    };
  },
  methods: {
    hitBad() {
      if (this.newGame === false) {
        return;
      } else {
        this.points -= 2;
      }
    },

    hit1() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped1 = false
      }
    },
    hit2() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped2 = false;
      }
    },
    hit3() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped3 = false;
      }
    },
    hit4() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped4 = false;
      }
    },
    hit5() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped5 = false;
      }
    },
    hit6() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped6 = false;
      }
    },
    hit7() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped7 = false;
      }
    },
    hit8() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped8 = false;
      }
    },
    hit9() {
      if (this.newGame === false) {
        return;
      } else {
        this.points += 1;
        this.popped9 = false;
      }
    },

    guideInvoke() {
      alert(
        "Click on the green circles to earn points.\nClicking on red circles will subtract your points by 2.\n\nGet as many points as you can in 30 seconds."
      );
    },

    startGame() {
      this.newGame = true;
      this.points = 0;
      this.timer = 30;
      const timerInterval = setInterval(() => {
        this.timer -= 1;

        if (this.timer === -1) {
          this.timer = 0;
          alert(`Times up! Your score: ${this.points}`);
          this.newGame = false;
          clearInterval(timerInterval);
        }
      }, 1000);

      // chance of popped being true
      if (this.newGame === true) {
        const popperRand = setInterval(() => {
          if (Math.random() < 0.6) {
            this.popped1 = true;
            setTimeout(() => {
              this.popped1 = false;
            }, 2000);
          } else if (this.newGame === false)
            if (Math.random() < 0.6) {
              this.popped2 = true;
              setTimeout(() => {
                this.popped2 = false;
              }, 2000);
            }
          if (Math.random() < 0.6) {
            this.popped3 = true;
            setTimeout(() => {
              this.popped3 = false;
            }, 2000);
          }
          if (Math.random() < 0.6) {
            this.popped4 = true;
            setTimeout(() => {
              this.popped4 = false;
            }, 2000);
          }
          if (Math.random() < 0.6) {
            this.popped5 = true;
            setTimeout(() => {
              this.popped5 = false;
            }, 2000);
          }
          if (Math.random() < 0.6) {
            this.popped6 = true;
            setTimeout(() => {
              this.popped6 = false;
            }, 2000);
          }
          if (Math.random() < 0.6) {
            this.popped7 = true;
            setTimeout(() => {
              this.popped7 = false;
            }, 2000);
          }
          if (Math.random() < 0.6) {
            this.popped8 = true;
            setTimeout(() => {
              this.popped8 = false;
            }, 2000);
          }
          if (Math.random() < 0.6) {
            this.popped9 = true;
            setTimeout(() => {
              this.popped9 = false;
            }, 2000);
          }
          if (this.newGame === false) {
            clearInterval(popperRand);
          }
        }, 3000)
      }

    },
  },
};

Vue.createApp(game).mount("#MainGame");