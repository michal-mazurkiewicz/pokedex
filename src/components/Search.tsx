import { useEffect, useState } from "react"
import { FormControl, InputGroup } from "react-bootstrap"
import { getPokemons } from "../api/api"
import { PokemonsDTO, Result } from "../entities/api-entities"
import { useAppDispatch } from "../store/hooks"
import {  setPage, setPokemons } from "../store/reducers/pokemon-reducer"
import { getInitialData } from "../store/thunks/pokemon-thunk"


export const Search = () => {
    const [pokemonList, setPokemonList] = useState<Array<Result>>([])
    const dispatch = useAppDispatch()

    useEffect(() => {
        getPokemons({ limit: 898 }).then((res: PokemonsDTO) => {
            setPokemonList(res.results)
        })
    }, [])

    const filterPokemons = (keyword: string) => {
        return pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(keyword.toLowerCase()))
    }

    const handleChange = (event: any) => {
        const keyword  = event.target.value
        if (keyword || keyword.lenght > 2) {
            const filteredList = filterPokemons(event.target.value)
            dispatch(setPage({offset: 0, newPage: 1}))
            dispatch(setPokemons({ results: filteredList, count: filteredList.length }))
        }else{
            dispatch(getInitialData())
        }
    }

    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleChange} placeholder="Name"/>
        </InputGroup>
    )
}