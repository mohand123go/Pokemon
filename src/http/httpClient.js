import axios from "axios";
import { pokemonItemModeling } from "./Modeling";

export async function getData() {
  let res = await axios.get("https://pokeapi.co/api/v2/type/1/");

  return res.data;
}

export async function getPokemonsData(pageUrl) {
  const basicUrl = "https://pokeapi.co/api/v2/pokemon/";
  let res =
    pageUrl === undefined
      ? await axios.get(basicUrl)
      : await axios.get(pageUrl);

  return res.data;
}

export async function getPokemonDataById(id) {
  const basicUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await axios.get(basicUrl);

  return pokemonItemModeling(res.data);
}

export async function getPokemonData(url) {
  let res = await axios.get(`${url}`);

  return pokemonItemModeling(res.data);
}
