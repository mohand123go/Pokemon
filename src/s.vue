<template>
  <div id="app">
    <div class="container">
      <PokemonsList :PokemonsProp="Pokemons" />
      <NextOrPrevious
        v-if="next"
        @onPaginationHandler="paginationHandler(next)"
        btnText="next"
      />
      <NextOrPrevious
        v-if="prev"
        @onPaginationHandler="paginationHandler(prev)"
        btnText="pre"
      />
    </div>
  </div>
</template>

<script>
import { getPokemonsData } from "./http/httpClient";
import PokemonsList from "./components/PokemonsList";
import NextOrPrevious from "./components/NextOrPrevious";

export default {
  name: "App",
  components: {
    PokemonsList,
    NextOrPrevious,
  },
  data() {
    return {
      Pokemons: [],
      next: "",
      prev: "",
    };
  },

  created() {
    this.getPokemonsDataFun();
  },
  methods: {
    paginationHandler(followPage) {
      let urlPage = "";
      followPage === undefined
        ? (urlPage = this.pageUrl)
        : (urlPage = followPage);
      this.getPokemonsDataFun(urlPage);
    },

    getPokemonsDataFun(urlPage) {
      getPokemonsData(urlPage).then((data) => {
        console.log("data", data);
        this.Pokemons = data.results;
        this.next = data.next;
        this.prev = data.previous;
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  text-align: center;
  background-color: gray;
  min-height: 100vh;
}
.container {
  margin: 0 auto;
  max-width: 1140pxs;
}
</style>
