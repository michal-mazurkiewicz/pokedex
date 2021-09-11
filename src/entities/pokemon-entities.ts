import { PokemonDTO, Result } from "./api-entities";

export enum Type{
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export interface PokemonState{
    pokemons: Array<PokemonDTO>
    results: Array<Result>
    selected?: PokemonDTO | null
    count: number
    next?: string | null
    previous?: string | null
    limit: number,
    currentPage: number,
    offset: number
}