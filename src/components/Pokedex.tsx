import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../store/hooks";
import { selectPaginationSettings } from "../store/reducers/pokemon-reducer";
import { PokemonCard } from "./PokemonCard";

export function Pokedex() {
    const { results, limit, offset } = useAppSelector(selectPaginationSettings);
    return (
        <Container>
            <Row>
                {results.map((result, id) => {
                    if (id >= offset && id < offset + limit) {
                        return (
                            <Col key={id}>
                                <PokemonCard id={id} name={result.name} url={result.url} />
                            </Col>
                        );
                    }
                })}
            </Row>
        </Container>
    );
}