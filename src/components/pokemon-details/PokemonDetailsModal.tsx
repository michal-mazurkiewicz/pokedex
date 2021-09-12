import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectPokemonState, setSelected } from "../../store/reducers/pokemon-reducer";
import { getThumbnailURL } from "../../utils/pokemon-thumbnails";
import { mapTypeToWariant } from "../../utils/type-variant-mapper";
import { PokemonTypes } from "./PokemonTypes";

function MydModalWithGrid(props: any) {
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
              <Col xs={6} md={5} className="bg-steel">
                  <h4>Stats:</h4>
                <div>{`Weight: ${selected?.weight} g`}</div>
                {selected?.stats.map(f => <div>{`${f.stat.name[0].toUpperCase()}${f.stat.name.substr(1)}: ${f.base_stat}`}</div>)}
              </Col>
            </Row>
  
            <Row className="m-1 d-flex justify-content-evenly">
              <PokemonTypes pokemon={selected}/>
              <Col xs={6} md={5} className="bg-steel">
              {selected?.abilities.map(f => <Row>{f.ability.name}</Row>)}
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
      {selected && (<MydModalWithGrid show={!!selected} onHide={() => handleCloseModal()} />)}
    </>
  );
}