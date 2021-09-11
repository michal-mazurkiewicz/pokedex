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

export interface PokemonDTO{
    name: string
    abilities: Array<Ability>
    base_experience: number
    forms: Array<Form>
    stats: Array<Stat>
    sprites: {
        front_default: string
    }
    weight: number
    moves: Array<Move>
}