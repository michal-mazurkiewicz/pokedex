export interface Result{
    name: string
    url: string
}

export interface PokemonsDTO{
    count: number
    next: string
    previous: string
    results: Array<Result>
}

export interface Ability{
    abiliti: {
        name: string
        url: string
    },
    is_hidden: boolean
    slot: 1
}

export interface Form{
    name: string
    url: string
}

export interface Stat{
    base_stat: number,
    effort: number,
    stat: {
        name: string
        url: string
    }
}

export interface Move{
    move: {name:string, url:string}
}

export interface Type{
    name: string
    url: string
}

export interface TypeObject{
    slot: number
    type: Type
}

export interface PokemonDTO{
    name: string
    id: number
    abilities: Array<Ability>
    base_experience: number
    forms: Array<Form>
    stats: Array<Stat>
    sprites: {
        front_default: string
    }
    types: Array<TypeObject>
    weight: number
    moves: Array<Move>
}

export interface ChangePageParams{
    offset: number
    limit: number
    newPage: number
}