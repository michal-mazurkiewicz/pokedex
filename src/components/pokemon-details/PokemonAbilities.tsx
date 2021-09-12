import { Row, Col } from "react-bootstrap"
import { PokemonProps } from "../../entities/pokemon-entities"

export const PokemonAbilities = (props: PokemonProps) => {
    const {pokemon} = props

    return (
    <>
        <Col>Abilities: {pokemon?.abilities.map(a => (<div>{a.ability?.name}</div>))}</Col>
    </>)
} 