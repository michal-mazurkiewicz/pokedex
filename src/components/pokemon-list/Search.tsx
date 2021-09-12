import { FormControl, InputGroup } from "react-bootstrap"
import {  Result } from "../../entities/api-entities"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {  selectPokemonState, setPage, setPokemons } from "../../store/reducers/pokemon-reducer"


export const Search = () => {
    const {temp} = useAppSelector(selectPokemonState)
    const dispatch = useAppDispatch() 

    const filterPokemons = (keyword: string) => {
        return temp.filter((pokemon : Result) => pokemon.name.toLowerCase().includes(keyword.toLowerCase()))
    }

    const handleChange = (event: any) => {
        const keyword : string = event.target.value
        if (keyword && keyword.length >= 2) {
            const filteredList = filterPokemons(event.target.value)
            dispatch(setPage({offset: 0, newPage: 1}))
            dispatch(setPokemons({ results: filteredList, count: filteredList.length }))
        }else{
            dispatch(setPage({offset: 0, newPage: 1}))
            dispatch(setPokemons({ results: temp, count: temp.length }))
        }
    }

    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleChange} placeholder="Name"/>
        </InputGroup>
    )
}