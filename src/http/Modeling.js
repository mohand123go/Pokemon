export const pokemonItemModeling = ({ id, name, height, weight, sprites }) => {
  const spritesArray = [];

  for (const sprite in sprites) {
    // O(n)
    if (typeof sprites[sprite] === "string") {
      spritesArray.push(sprites[sprite]);
    }
  }

  //Object.keys(sprites).map((key) => console.log("key: ", key));

  return {
    id,
    name,
    height,
    weight,
    spritesArray,
  };
};
