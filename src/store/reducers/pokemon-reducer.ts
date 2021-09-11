import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ChangePageParams, PokemonsDTO } from "../../entities/api-entities";
import { PokemonState } from "../../entities/pokemon-entities";
import { RootState } from "../store";

const initialState: PokemonState = {
  pokemons: [],
  results: [],
  selected: null,
  count: 0,
  next: null,
  previous: null,
  limit: 12,
  currentPage: 1,
  offset: 0
};

export const pokemonSlice: Slice<PokemonState> = createSlice({
  name: "app-reducer",
  initialState,
  reducers: {
    setPokemons: (state: PokemonState, action: PayloadAction<PokemonsDTO>) => {
      const {results, count, next, previous} = action.payload
      state.results = results
      state.count = count
      state.next = next
      state.previous = previous
    },
    setPage: (state: PokemonState, action: PayloadAction<ChangePageParams>) => {
      state.currentPage = action.payload.newPage
      state.offset = action.payload.offset
    }
  },
});

export const { setPokemons, setPage } = pokemonSlice.actions;
export const selectPokemonState = (state: RootState) => state.pokemonReducer;
export default pokemonSlice.reducer;
