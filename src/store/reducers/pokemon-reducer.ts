import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ChangePageParams, PokemonsDTO } from "../../entities/api-entities";
import { PokemonState } from "../../entities/pokemon-entities";
import { RootState } from "../store";

const initialState: PokemonState = {
  pokemons: [],
  filtered: [],
  count: 0,
  limit: 12,
  currentPage: 1,
  offset: 0
};

export const pokemonSlice: Slice<PokemonState> = createSlice({
  name: "app-reducer",
  initialState,
  reducers: {
    setPokemons: (state: PokemonState, action: PayloadAction<PokemonsDTO>) => {
      const {results} = action.payload
      state.pokemons = results
      state.count = results.length
    },
    setPage: (state: PokemonState, action: PayloadAction<ChangePageParams>) => {
      state.currentPage = action.payload.newPage
      state.offset = action.payload.offset
    },
    setFiltered: (state: PokemonState, action: PayloadAction<PokemonsDTO>) => {
      const {results} = action.payload
      state.filtered = results
      state.count = results.length
    }
  },
});

export const { setPokemons, setPage, setFiltered } = pokemonSlice.actions;
export const selectPokemonState = (state: RootState) => state.pokemonReducer;
export default pokemonSlice.reducer;
