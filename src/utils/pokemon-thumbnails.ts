import images from "../assets/pictures/images";
import { PokemonDTO } from "../entities/api-entities";

export const getThumbnailURL = (pokemon: PokemonDTO) => {
    const id =
      pokemon.id > 9 && pokemon.id < 100
        ? `0${pokemon.id}`
        : pokemon.id < 10
        ? `00${pokemon.id}`
        : pokemon.id < 1000
        ? `${pokemon.id}`
        : `${pokemon.id}`;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  };

export const getTypeThumbnail = (type : string) => {
    return images.find(i => i.type === type)?.src
}