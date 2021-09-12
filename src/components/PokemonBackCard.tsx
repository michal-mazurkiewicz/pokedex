import { Container, Row, Col } from "react-bootstrap";
import { PokemonDTO } from "../entities/api-entities";
import { PokemonStats } from "./pokemon-details/PokemonStats";

interface BackCardProps{
    pokemon: PokemonDTO
    onClick: () => void
}

export const PokemonBackCard = (props: BackCardProps) => {
    const {pokemon, onClick} = props
    return(
    <Container onClick={onClick}>
        <Col>
        <Row>
        </Row>
        <div><b>Statistics</b>:</div>
        <PokemonStats pokemon={pokemon}/>
        </Col>
    </Container>)
}