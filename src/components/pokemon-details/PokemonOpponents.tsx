import { Col, Image } from "react-bootstrap";
import { getTypeThumbnail } from "../../utils/pokemon-thumbnails";
import { randomTypes } from "../../utils/random-types";

interface OpponentsProps{
    label:string,
    type: string,
}

export const PokemonOpponents = (props: OpponentsProps) => {
  const { label, type } = props;
  const types = randomTypes(type)
  return (
    <Col className="d-flex">
    <div className="section-details d-flex align-items-center flex-grow-1 align-content-stretch align-items-center justify-content-center">
        {`${label}:`}
        {types.map((t) => (
          <Image
            style={{ marginRight: "10px", marginLeft: "10px" }}
            src={getTypeThumbnail(t)}
            width={25}
            height={25}
          />
        ))}
    </div>
    </Col>
  );
};
