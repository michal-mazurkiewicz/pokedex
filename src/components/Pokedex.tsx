import { Card, Col, Container, Row } from "react-bootstrap";

export function Pokedex() {

    return (
        <Container>
            <Row>
            {[
                'Primary',
                'Secondary',
                'Success',
                'Danger',
                'Secondary',
                'Success',
                'Danger',
                'Warning',
                'Info',
                'Light',
                'Dark',
            ].map((variant, idx) => (
                <Col>
                <Card
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{variant} Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    )
}