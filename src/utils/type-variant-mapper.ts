
const map : any = {
    fire: 'danger',
    water: 'primary',
    grass: 'success',
    electric: 'warning',
    ice: 'info',
    ghost: 'secondary',
    dark: 'dark',
    normal: 'normal',
    dragon: 'dragon',
    steel: 'steel',
    fairy: 'fairy',
    poison: 'poison',
    ground: 'ground',
    flying: 'flying',
    fighting: 'fighting',
    psychic: 'psychic',
    bug: 'bug',
    rock: 'rock',
}


export const mapTypeToWariant = (pokemonType: string) : string => {
    return map[pokemonType]
}