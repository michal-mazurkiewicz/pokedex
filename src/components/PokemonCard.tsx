import { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { getPokemon } from "../api/api";
import { PokemonDTO } from "../entities/api-entities";
import { ViewState } from "../entities/app-entities";
import { mapTypeToWariant } from "../utils/type-variant-mapper";

interface PokemonProps {
    id: number;
    name: string;
    url: string;
}

export function PokemonCard(props: PokemonProps) {
    const [viewState, setViewState] = useState<ViewState>(ViewState.LOADING)
    const [pokemon, setPokemon] = useState<PokemonDTO>();
    const [type, setVariant] = useState<string>('');
    const { id, name, url } = props;

    useEffect(() => {
        getPokemon(url).then((res: PokemonDTO) => {
            setPokemon(res);
            setVariant(mapTypeToWariant(res?.types[0].type.name));
            setViewState(ViewState.SUCCESS)
        });
    }, []);

    return (
        <Card
            bg={type}
            key={id}
            text={type === "light" ? "dark" : "white"}
            style={{ width: "12rem", height: "19rem" }}
            className="mb-2"
        >
            {viewState === ViewState.LOADING ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <>
                    <Card.Img
                        className="img-fluid"
                        variant="top"
                        src={pokemon?.sprites.front_default}
                    ></Card.Img>
                    <Card.Header>
                        <Card.Title>{name.toUpperCase()}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Button variant={type === "light" ? "dark" : "white"}>Details</Button>
                    </Card.Body>
                </>
            )}
        </Card>
    );
}
