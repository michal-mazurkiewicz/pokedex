import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ChangePageParams, PokemonDTO, PokemonsDTO } from "../../entities/api-entities";
import { PokemonState } from "../../entities/pokemon-entities";
import { RootState } from "../store";

const initialState: PokemonState = {
  pokemons: [],
  results: [],
  selected: null,
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
      state.results = results
      state.count = results.length
    },
    setPage: (state: PokemonState, action: PayloadAction<ChangePageParams>) => {
      state.currentPage = action.payload.newPage
      state.offset = action.payload.offset
    },
    setLimit: (state: PokemonState, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    setSelected: (state: PokemonState, action: PayloadAction<PokemonDTO | null>) => {
      state.selected = action.payload
    },

  },
});

export const { setPokemons, setPage, setSelected } = pokemonSlice.actions;
export const selectPokemonState = (state: RootState) => state.pokemonReducer;
export const selectPaginationSettings = (state: RootState) => {return {
  currentPage: state.pokemonReducer.currentPage,
  limit: state.pokemonReducer.limit,
  count: state.pokemonReducer.count,
  results: state.pokemonReducer.results,
  offset: state.pokemonReducer.offset,
}}
export default pokemonSlice.reducer;
