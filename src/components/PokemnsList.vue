<template>
  <div class="pokemnList">
    <PokemonItem
      v-for="Pokemon in PokemonsProp"
      :PokemonProp="Pokemon"
      :key="Pokemon.name"
    />
    <h1>{{ PokemonsProp.name }}</h1>
  </div>
</template>

<script>
import PokemonItem from "./PokemonItem";
export default {
  components: { PokemonItem },
  props: ["PokemonsProp"],
};
</script>

<style scoped>
.pokemnList {
  display: flex;

  flex-wrap: wrap;
}
</style>
