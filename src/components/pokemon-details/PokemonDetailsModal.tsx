import { useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { getThumbnailURL } from "../../utils/pokemon-thumbnails";
import { mapTypeToWariant } from "../../utils/type-variant-mapper";
import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonStats } from "./PokemonStats";
import { PokemonTypes } from "./PokemonTypes";
import pokeball from '../../assets/pictures/pokeball.svg'
import { PokemonProps } from "../../entities/pokemon-entities";

function PokedexModal(props: any) {

    const {pokemon} = props
    const type = pokemon?.types[0].type.name
    const thumbnailBackground = `bg-${mapTypeToWariant(type)}`
    
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="text-white" >
        <Modal.Header closeButton className="bg-danger border-danger">
          <Modal.Title id="contained-modal-title-vcenter" >
            {pokemon?.name.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid bg-danger" >
          <Container>
            <Row className="m-1 d-flex justify-content-evenly">
              <Col xs={12} md={7} className="details-img">
                <Image src={getThumbnailURL(pokemon!)} className={thumbnailBackground} />
              </Col> 
            </Row>
            <Row className="m-1 d-flex justify-content-evenly">
            <Col className="d-flex">
            <div className="section-details d-flex justify-content-evenly flex-wrap">
                <PokemonStats pokemon={pokemon}/>
              </div>
            </Col>
            </Row>
            <Row className="m-1 d-flex justify-content-evenly">
              <PokemonTypes pokemon={pokemon}/> 
              <PokemonAbilities pokemon={pokemon} />
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

export const PokemonDetailsModal = (props: PokemonProps) => {
    const {pokemon} = props
    const [modalShow, setModalShow] = useState(false);


  return (
    <>
    <Button style={{backgroundColor: 'transparent', border: '0'}} onClick={() => setModalShow(true)}>
              <Image className="btn-poke" src={pokeball} width="30px" height="30px"/>
    </Button>
    <PokedexModal show={modalShow} onHide={() => setModalShow(false)} pokemon={pokemon}/>
    </>
  );
}