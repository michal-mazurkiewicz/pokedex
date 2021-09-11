import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../store/hooks";
import { selectPokemonState } from "../store/reducers/pokemon-reducer";
import { PokemonCard } from "./PokemonCard";

export function Pokedex() {
    
    const { results } = useAppSelector(selectPokemonState);
    const type = 'warning'
    return (
        <Container>
            <Row>
            {results.map((result, id) => (
                <Col>
                {console.log(id, type, result)}
                <PokemonCard id={id} name={result.name} type={type} url={result.url}/>
                </Col>
            ))}
            </Row>
        </Container>
    )
}