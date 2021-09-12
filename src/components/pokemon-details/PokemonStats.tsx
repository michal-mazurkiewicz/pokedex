import { PokemonProps } from "../../entities/pokemon-entities";
import { firstLetterUpperCase } from "../../utils/string-formater";


export const PokemonStats = (props: PokemonProps) => {
  const { pokemon } = props;
  return (
    <>
        <div>{`Weight: ${pokemon?.weight} g`}</div>
        {pokemon?.stats.map((f) => (
          <div>{`${firstLetterUpperCase(f.stat.name)}: ${f.base_stat}`}</div>
        ))}
    </>
  );
};
