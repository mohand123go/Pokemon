export const PokemonMixin = {
  data() {
    return {
      imageInterval: "",
      imageCounter: 0,
      srcImg: "",
    };
  },

  methods: {
    spritesImages() {
      this.imageInterval = setInterval(() => {
        console.log(
          "welcome from the maxin this is the value of  this.pokemon",
          this.Pokemon
        );
        this.srcImg = this.Pokemon.spritesArray[this.imageCounter];

        ++this.imageCounter;
        if (this.imageCounter > this.Pokemon.spritesArray.length - 1) {
          this.imageCounter = 0;
        }
      }, 2000);
    },
  },

  destroyed() {
    window.clearInterval(this.imageInterval);
  },
};
