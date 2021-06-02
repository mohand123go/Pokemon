<template>
  <div class="Pokemon-item">
    <div class="pokemon-item__wraper">
      <header>
        <h1 class="Pokemon__name">
          {{ Pokemon.name }}
        </h1>
        <img class="Pokemon__img" :src="srcImg" alt="" />
      </header>
      <div class="pokemon__body">
        <p class="Pokemon__subtitle"><strong>ID</strong> : {{ Pokemon.id }}</p>
        <p class="Pokemon__subtitle">
          <strong>Height</strong> : {{ Pokemon.height }}
        </p>
        <p class="Pokemon__subtitle">
          <strong>Weight</strong> : {{ Pokemon.weight }}
        </p>
        <button @click="viewProfile" class="Pokemon__know-more">
          {{ Pokemon.name }} profie
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Pokemon-item {
  width: 33%;
  padding: 20px;
}

strong {
  font-weight: bolder;
}
.pokemon-item__wraper {
  background-color: white;
  padding: 20px;
}

.pokemon__body {
  text-align: left;
}
.Pokemon__subtitle {
  line-height: 1.25;
  font-size: 1.25rem;
  padding: 10px 0;
}

.Pokemon__know-more {
  width: 100%;
  padding: 15px 0;
  font-size: 1.15rem;
  font-weight: bolder;
  background: rgb(31, 149, 243);
  color: white;
  border: none;
}
</style>
<script>
import { getPokemonData } from "../http/httpClient";
import { PokemonMixin } from "../maxins/pokemonMixin";

export default {
  mixins: [PokemonMixin],
  data() {
    return {
      Pokemon: {},
    };
  },
  props: ["PokemonProp"],
  methods: {
    viewProfile() {
      console.log("viewProfile");
      this.$router.push({
        // note* should use name instead of path
        name: "PokemonProfile",
        params: {
          id: this.Pokemon.id,
        },
      });
    },
  },
  created() {
    getPokemonData(this.PokemonProp.url)
      .then((data) => (this.Pokemon = data))
      .then(() => {
        this.spritesImages();
      });
  },
};
</script>
