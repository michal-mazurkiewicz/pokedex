import { useEffect, useState } from "react";
import { Button, Card, Spinner, Image } from "react-bootstrap";
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
        setViewState(ViewState.LOADING)
        getPokemon(url).then((res: PokemonDTO) => {
            setPokemon(res);
            setVariant(mapTypeToWariant(res?.types[0].type.name));
            setViewState(ViewState.SUCCESS)
        });
    }, [id, name, url]);

    const getThumbnailURL = (pokemon: PokemonDTO) => {
        if(pokemon.id < 10){return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokemon.id}.png`}
        if(pokemon.id > 9 && pokemon.id < 100){return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${pokemon.id}.png`}
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`
    };

    return (
        <Card
            bg={type}
            key={id}
            text={"white"}
            className="mb-2 poke-card"
        >
            {viewState === ViewState.LOADING || !pokemon ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <>
                    <Card.Img
                        className="img-fluid"
                        variant="top"
                        src={getThumbnailURL(pokemon)}
                    ></Card.Img>
                    <Card.Header>
                        <Card.Title>{name.toUpperCase()} {pokemon?.types[0].type.name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Image src="holder.js/171x180" roundedCircle />
                    <Button variant={type === "light" ? "dark" : "white"}>Details</Button>
                    </Card.Body>
                </>
            )}
        </Card>
    );
}
