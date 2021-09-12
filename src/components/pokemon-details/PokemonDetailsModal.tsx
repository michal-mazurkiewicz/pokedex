import { Col, Container, Image, Modal, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectPokemonState, setSelected } from "../../store/reducers/pokemon-reducer";
import { getThumbnailURL } from "../../utils/pokemon-thumbnails";
import { mapTypeToWariant } from "../../utils/type-variant-mapper";
import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonStats } from "./PokemonStats";
import { PokemonTypes } from "./PokemonTypes";

function PokedexModal(props: any) {
    const {selected} = useAppSelector(selectPokemonState)
    const type = selected?.types[0].type.name
    const thumbnailBackground = `bg-${mapTypeToWariant(type)}`
    
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="text-white" >
        <Modal.Header closeButton className="bg-danger border-danger">
          <Modal.Title id="contained-modal-title-vcenter" >
            {selected?.name.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid bg-danger" >
          <Container>
            <Row className="m-1 d-flex justify-content-evenly">
              <Col xs={12} md={7} className="details-img">
                <Image src={getThumbnailURL(selected!)} className={thumbnailBackground} />
              </Col> 
            </Row>
            <Row className="m-1 d-flex justify-content-evenly">
            <Col className="d-flex">
            <div className="section-details d-flex justify-content-evenly flex-wrap">
                <PokemonStats pokemon={selected}/>
              </div>
            </Col>
            </Row>
            <Row className="m-1 d-flex justify-content-evenly">
              <PokemonTypes pokemon={selected}/> 
              <PokemonAbilities pokemon={selected} />
            </Row>
            <Row className="m-1 d-flex justify-content-evenly">
              <Col className="mt-3 d-flex align-items-center justify-content-evenly">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/63/PlayStation_Directional_button.svg" height="130rem"/>
              </Col>
            </Row>
          </Container>  
        </Modal.Body>
      </Modal>
    );
  }

export const PokemonDetailsModal = () => {
    const {selected} = useAppSelector(selectPokemonState)
    const dispatch = useAppDispatch()

    const handleCloseModal = () => {
        dispatch(setSelected(null))
    }

  return (
    <>
      {selected && (<PokedexModal show={!!selected} onHide={() => handleCloseModal()} />)}
    </>
  );
}