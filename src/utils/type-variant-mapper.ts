
const map : any = {
    normal: 'light',
    fire: 'danger',
    water: 'primary',
    grass: 'success',
    electric: 'warning',
    ice: 'info',
    poison: 'light',
    ground: 'light',
    flying: 'light',
    psychic: 'light',
    bug: 'light',
    rock: 'light',
    ghost: 'secondary',
    dark: 'dark',
    dragon: 'light',
    steel: 'light',
    fairy: 'light'
}


export const mapTypeToWariant = (pokemonType: any) : string => {
    return map[pokemonType]
}