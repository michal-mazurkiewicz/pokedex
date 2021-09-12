/* eslint-disable array-callback-return */
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../store/hooks";
import { selectPokemonState } from "../store/reducers/pokemon-reducer";
import { PokemonCard } from "./PokemonCard";

export function Pokedex() {
    const { results, limit, offset } = useAppSelector(selectPokemonState);
    return (
        <Container>
            <Row className="mb-6">
                {results.map((result, id) => {
                    if (id >= offset && id < offset + limit) {
                        return (
                            <Col key={id} className="d-flex justify-content-center">
                                <PokemonCard id={id} name={result.name} url={result.url} />
                            </Col>
                        );
                    }
                })}
            </Row>
        </Container>
    );
}