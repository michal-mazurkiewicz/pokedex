import { Container, Row, Col } from "react-bootstrap";
import { PokemonProps } from "../entities/pokemon-entities";
import { PokemonAbilities } from "./pokemon-details/PokemonAbilities";
import { PokemonTypes } from "./pokemon-details/PokemonTypes";


export const PokemonBackCard = (props: PokemonProps) => {
    const {pokemon} = props
    return(
    <Container>
        <Col>
        <Row>
        </Row>
        <PokemonTypes pokemon={pokemon}/>
        <PokemonAbilities pokemon={pokemon}/>
        </Col>
    </Container>)
}