import { Col } from "react-bootstrap";
import { PokemonProps } from "../../entities/pokemon-entities";
import { firstLetterUpperCase } from "../../utils/string-formater";

export const PokemonAbilities = (props: PokemonProps) => {
  const { pokemon } = props;

  return (
    <Col>
    <div className="section-details d-flex flex-column align-content-stretch align-items-center justify-content-center">
      Abilities:
      {pokemon?.abilities.map((a,i) => (
        <div key={i}>{firstLetterUpperCase(a.ability?.name)}</div>
      ))}
    </div>
    </Col>
  );
};
