import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../store/hooks";
import { selectPokemonState } from "../store/reducers/pokemon-reducer";
import { PokemonCard } from "./PokemonCard";

export function Pokedex() {
    
    const { results } = useAppSelector(selectPokemonState);
    return (
        <Container>
            <Row>
            {results.map((result, id) => (
                <Col key={id}>
                <PokemonCard id={id} name={result.name}  url={result.url}/>
                </Col>
            ))}
            </Row>
        </Container>
    )
}