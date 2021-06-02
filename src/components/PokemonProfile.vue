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
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script>
//  import getPokemonData from "../http/getPokemonData";
import { getPokemonDataById } from "../http/httpClient";
import { PokemonMixin } from "../maxins/pokemonMixin";
export default {
  mixins: [PokemonMixin],

  data() {
    return { Pokemon: {} };
  },

  props: ["PokemonProp"],
  created() {
    console.log("this.$route.params.id", this.$route.params.id);
    getPokemonDataById(this.$route.params.id)
      .then((pokemonInfo) => (this.Pokemon = pokemonInfo))
      .then(() => {
        console.log("this.Pokemon", this.Pokemon);
        this.spritesImages();
      });
  },
};
</script>
