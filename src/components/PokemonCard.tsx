import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getPokemon } from "../api/api";
import { getThumbnailURL } from "../utils/pokemon-thumbnails";
import { PokemonDTO } from "../entities/api-entities";
import { mapTypeToWariant } from "../utils/type-variant-mapper";
import { PokemonBackCard } from "./PokemonBackCard";
import { PokemonDetailsModal } from "./pokemon-details/PokemonDetailsModal";

interface PokemonProps {
  id: number;
  name: string;
  url: string;
}

export function PokemonCard(props: PokemonProps) {
  const whiteTypes: Array<string> = ["flying", "normal", "fighting"];
  const [pokemon, setPokemon] = useState<PokemonDTO>();
  const [type, setVariant] = useState<string>("");
  const [open, setOpen] = useState(true);
  const { id, name, url } = props;

  useEffect(() => {
    getPokemon(url).then((res: PokemonDTO) => {
      setPokemon(res);
      setVariant(mapTypeToWariant(res?.types[0].type.name));
    });
  }, [id, name, url]);

  return (
    <Card
      bg={type}
      key={id}
      text={whiteTypes.find((i) => i === type) ? "dark" : "white"}
      className="mb-2 poke-card text-center"
      onClick={() => setOpen(!open)}
      aria-controls="example-fade-text"
      aria-expanded={open}
    >
      {pokemon &&
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

          <Card.Footer >
            <PokemonDetailsModal pokemon={pokemon}/>
          </Card.Footer>
        </>
      }
    </Card>
  ); 
}
