import { Container, Row, Col } from 'reactstrap';

import Stories from '../Stories/Stories';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import Offers from '../Offers/Offers';
import Info from '../Info/Info';

import './Main.css';

function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <Stories />
          <SpecialOffers />
          <Offers />
          <Info />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
