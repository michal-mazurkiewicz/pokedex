//@ts-nocheck
import { getThumbnailURL } from "../../utils/pokemon-thumbnails"
import { firstLetterUpperCase } from "../../utils/string-formater"
import { mapTypeToWariant } from "../../utils/type-variant-mapper"

test("Should return string with first letter upper case", () => {
    const input = 'attack'
    const res = 'Attack'
    expect(firstLetterUpperCase(input)).toEqual(res)
})

test("Should return thumbnail url", () => {
    const input1 = {id: 1}
    const input2 = {id: 10}
    const input3 = {id: 100}
    const res1 = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png`
    const res2 = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png`
    const res3 = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png`
    expect(getThumbnailURL(input1)).toEqual(res1)
    expect(getThumbnailURL(input2)).toEqual(res2)
    expect(getThumbnailURL(input3)).toEqual(res3)
})

test("Should return variant for type", () => {
    const input = 'fire'
    const res = 'danger'
    expect(mapTypeToWariant(input)).toEqual(res)
})