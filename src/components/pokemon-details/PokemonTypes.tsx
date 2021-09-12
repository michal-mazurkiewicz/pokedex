import { Col, Image } from "react-bootstrap";
import { PokemonProps } from "../../entities/pokemon-entities";
import { getTypeThumbnail } from "../../utils/pokemon-thumbnails";


export const PokemonTypes = (props: PokemonProps) => {
  const { pokemon } = props;
  return (
    <Col className="d-flex">
    <div className="section-details d-flex align-items-center flex-grow-1 align-content-stretch align-items-center justify-content-center">
        Types:{" "}
        {pokemon?.types.map((t) => (
          <Image
            style={{ marginRight: "10px", marginLeft: "10px" }}
            src={getTypeThumbnail(t.type.name)}
            width={25}
            height={25}
          />
        ))}
    </div>
    </Col>
  );
};
