import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { getPokemon } from "../api/api";
import { PokemonDTO } from "../entities/api-entities";
import { mapTypeToWariant } from "../utils/type-variant-mapper";

interface PokemonProps {
    id: number;
    name: string;
    type: string;
    url: string;
}

export function PokemonCard(props: PokemonProps) {
    const [pokemon, setPokemon] = useState<PokemonDTO | null>(null);
    const [variant, setVariant] = useState<string>("info");
    const { id, name, url } = props;

    useEffect(() => {
        getPokemon(url).then((res: PokemonDTO) => {
            setPokemon(res);
            const variant = mapTypeToWariant(pokemon?.types[0].type.name);
            setVariant(variant);
        });
    }, []);

    return (
        <Card
            bg={variant}
            key={id}
            text={variant === "light" ? "dark" : "white"}
            style={{ width: "15rem", height: "23rem" }}
            className="mb-2"
        >
            {!pokemon ? (
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
                        <Card.Text>
                            Some quick example 
                        </Card.Text>
                    </Card.Body>
                </>
            )}
        </Card>
    );
}
