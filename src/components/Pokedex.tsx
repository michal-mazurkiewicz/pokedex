/* eslint-disable array-callback-return */
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../store/hooks";
import { selectPokemonState } from "../store/reducers/pokemon-reducer";
import { PokemonCard } from "./PokemonCard";

export function Pokedex() {
    const { filtered, limit, offset } = useAppSelector(selectPokemonState);
    return (
        <Container>
            {!filtered.length && <Col><div>No results</div></Col>}
            <Row className="mb-6">
                {filtered.map((result, id) => {
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