<template>
  <div class="home">
    <Loader v-if="isLoading" />
    <template>
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
    </template>
  </div>
</template>

<script>
import { getPokemonsData } from "../http/httpClient";
import PokemonsList from "../components/PokemnsList";
import NextOrPrevious from "../components/NextOrPrevious";
import Loader from "../components/Loader.vue";

export default {
  name: "Home",
  components: {
    PokemonsList,
    NextOrPrevious,
    Loader,
  },
  data() {
    return {
      Pokemons: [],
      next: "",
      prev: "",
      isLoading: true,
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
        this.Pokemons = data.results;
        this.next = data.next;
        this.prev = data.previous;
      });
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    console.log("mounted phases");
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
