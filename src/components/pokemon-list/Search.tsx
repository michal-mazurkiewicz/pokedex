import { FormControl, InputGroup } from "react-bootstrap"
import {  Result } from "../../entities/api-entities"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {  selectPokemonState, setFiltered, setPage } from "../../store/reducers/pokemon-reducer"


export const Search = () => {
    const {pokemons} = useAppSelector(selectPokemonState)
    const dispatch = useAppDispatch() 

    const filterPokemons = (keyword: string) => {
        return pokemons.filter((pokemon : Result) => pokemon.name.toLowerCase().includes(keyword.toLowerCase()))
    }

    const handleChange = (event: any) => {
        const keyword : string = event.target.value
        if (keyword && keyword.length >= 2) {
            const filteredList = filterPokemons(event.target.value)
            dispatch(setPage({offset: 0, newPage: 1}))
            dispatch(setFiltered({ results: filteredList, count: filteredList.length }))
        }else{
            dispatch(setPage({offset: 0, newPage: 1}))
            dispatch(setFiltered({ results: pokemons, count: pokemons.length }))
        }
    }

    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleChange} placeholder="Name"/>
        </InputGroup>
    )
}