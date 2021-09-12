import { Pagination } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectPokemonState } from "../../store/reducers/pokemon-reducer";
import { changePage } from "../../store/thunks/pokemon-thunk";

export function PokePagination() {
  const { count, limit, currentPage } = useAppSelector(selectPokemonState);
  const dispatch = useAppDispatch();

  let items = [];
  let noPages = Math.ceil(count / limit);

  const handleChangePage = async (newPage: number) => {
    await dispatch(changePage(newPage));
  };

  for (let number = 1; number <= noPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        value={number}
        onClick={() => handleChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div style={{display: "flex", justifyContent:'center'}}>
      <Pagination size="sm">
        <Pagination.First disabled={currentPage === 1} onClick={() => handleChangePage(1)}/>
        <Pagination.Prev disabled={currentPage === 1} onClick={() => handleChangePage(currentPage - 1)}/>
        {currentPage > 3 && items[0]}
        {currentPage > 3 && <Pagination.Ellipsis />}
        {items[currentPage - 3]}
        {items[currentPage - 2]}
        {items[currentPage - 1]}
        {items[currentPage]}
        {items[currentPage + 1]}
        {currentPage + 3 < noPages && <Pagination.Ellipsis />}
        {currentPage + 3 < noPages && items[noPages - 1]}
        <Pagination.Next disabled={currentPage === noPages} onClick={() => handleChangePage(currentPage + 1)}/>
        <Pagination.Last disabled={currentPage === noPages} onClick={() => handleChangePage(noPages)}/>
      </Pagination>
    </div>
  );
}
