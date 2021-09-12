import { Image } from "react-bootstrap";
import { PokemonDTO } from "../../entities/api-entities";
import { getStatIcon } from "../../utils/pokemon-thumbnails";
import { firstLetterUpperCase } from "../../utils/string-formater";

interface StatsProps {
  pokemon: PokemonDTO | undefined | null;
  details?: boolean;
}

export const PokemonStats = (props: StatsProps) => {
  const { pokemon, details } = props;
  return (
    <>
      {!details && <div>{`Weight: ${pokemon?.weight} g`}</div>}
      {pokemon?.stats.map((f) => (
        <>
          {details ? (
            <div className="d-flex align-items-center">
              <Image
              src={getStatIcon(f.stat.name)}
              height="28rem"
              width="28rem"
            />
            <div className="m-2">{`${firstLetterUpperCase(f.stat.name)}: ${f.base_stat}`}</div>
            </div>
          ) : (
            <div>{`${firstLetterUpperCase(f.stat.name)}:${f.base_stat}`}</div>
          )}
        </>
      ))}
    </>
  );
};
