import { Col, Image } from "react-bootstrap";
import { PokemonDTO } from "../../entities/api-entities";
import { getTypeThumbnail } from "../../utils/pokemon-thumbnails";

interface PokemonTypesProps {
  pokemon: PokemonDTO | null | undefined;
}

export const PokemonTypes = (props: PokemonTypesProps) => {
  const { pokemon } = props;
  return (
    <>
      <Col className="d-flex align-items-center">
        Types:{" "}
        {pokemon?.types.map((t) => (
          <Image
            style={{ marginRight: "10px", marginLeft: "10px" }}
            src={getTypeThumbnail(t.type.name)}
            width={25}
            height={25}
          />
        ))}
      </Col>
    </>
  );
};
