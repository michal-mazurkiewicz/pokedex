import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { PokemonsDTO } from "../../entities/api-entities";
import { PokemonState } from "../../entities/pokemon-entities";
import { RootState } from "../store";

const initialState: PokemonState = {
  pokemons: [],
  results: [],
  selected: null,
  count: 0,
  next: null,
  previous: null,
};

export const pokemonSlice: Slice<PokemonState> = createSlice({
  name: "app-reducer",
  initialState,
  reducers: {
    setPokemons: (state: PokemonState, action: PayloadAction<PokemonsDTO>) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { setPokemons } = pokemonSlice.actions;
export const selectPokemonState = (state: RootState) => state.pokemonReducer;
export default pokemonSlice.reducer;
