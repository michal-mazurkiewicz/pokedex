import axios from "axios";
import { paramsToQueryString } from "./utils";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = async (params?: any) => {
  return (await axios.get(baseURL + paramsToQueryString(params))).data;
};
