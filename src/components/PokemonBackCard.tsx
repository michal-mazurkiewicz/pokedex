import { Container, Row, Col } from "react-bootstrap";
import { PokemonProps } from "../entities/pokemon-entities";
import { PokemonStats } from "./pokemon-details/PokemonStats";


export const PokemonBackCard = (props: PokemonProps) => {
    const {pokemon} = props
    return(
    <Container>
        <Col>
        <Row>
        </Row>
        <div><b>Statistics</b>:</div>
        <PokemonStats pokemon={pokemon}/>
        </Col>
    </Container>)
}