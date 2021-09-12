import { useEffect, useState } from "react";
import { Button, Card, Spinner, Image, Fade } from "react-bootstrap";
import { getPokemon } from "../api/api";
import { getThumbnailURL, getTypeThumbnail } from "../utils/pokemon-thumbnails";
import { PokemonDTO } from "../entities/api-entities";
import { ViewState } from "../entities/app-entities";
import { mapTypeToWariant } from "../utils/type-variant-mapper";
import { PokemonBackCard } from "./PokemonBackCard";
import { useAppDispatch } from "../store/hooks";
import { selectPokemon } from "../store/thunks/pokemon-thunk";

interface PokemonProps {
  id: number;
  name: string;
  url: string;
}

export function PokemonCard(props: PokemonProps) {
  const whiteTypes: Array<string> = ["flying", "normal", "fighting"];
  const [viewState, setViewState] = useState<ViewState>(ViewState.LOADING);
  const [pokemon, setPokemon] = useState<PokemonDTO>();
  const [type, setVariant] = useState<string>("");
  const [open, setOpen] = useState(true);
  const { id, name, url } = props;
  const dispatch = useAppDispatch()

  useEffect(() => {
    setViewState(ViewState.LOADING);
    getPokemon(url).then((res: PokemonDTO) => {
      setPokemon(res);
      setVariant(mapTypeToWariant(res?.types[0].type.name));
      setViewState(ViewState.SUCCESS);
    });
  }, [id, name, url]);


  return (
    <Card
      bg={type}
      key={id}
      text={whiteTypes.find((i) => i == type) ? "dark" : "white"}
      className="mb-2 poke-card text-center"
      onClick={() => setOpen(!open)}
      aria-controls="example-fade-text"
      aria-expanded={open}
    >
      {viewState === ViewState.LOADING || !pokemon ? (
          <Card.Body>
        <Spinner animation="border" variant="primary" />
        </Card.Body>
      ) : (
        <>
          {open && (
            <Card.Img
              className="img-fluid"
              variant="top"
              src={getThumbnailURL(pokemon)}
            ></Card.Img>
          )}

          <Card.Header>
            <Card.Title>{name.toUpperCase()}</Card.Title>
          </Card.Header>
          {!open && <PokemonBackCard pokemon={pokemon} />}

          <Card.Footer>
            <Button variant="primary" onClick={() => {dispatch(selectPokemon(pokemon))}}>
              Details
            </Button>
          </Card.Footer>
        </>
      )}
    </Card>
  );
}
