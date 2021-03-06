import { PokemonDTO, Result } from "./api-entities";

export enum Type{
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export interface PokemonState{
    pokemons: Array<Result>
    filtered: Array<Result>
    count: number
    limit: number,
    currentPage: number,
    offset: number
}

export interface PokemonProps{
    pokemon: PokemonDTO | null | undefined
}