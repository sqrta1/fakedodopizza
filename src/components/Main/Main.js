import { Container, Row, Col } from 'reactstrap';

import Stories from '../Stories/Stories';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import Offers from '../Offers/Offers';
import Info from '../Info/Info';
import Login from '../Login/Login';

import './Main.css';

function Main() {
  return (
    <Container fluid={true}>
      <Row>
        <Col xl={{ size: 8, offset: 2 }}>
          <Stories />
        </Col>
        <SpecialOffers />
        <Col xl={{ size: 8, offset: 2 }}>
          <Offers />
          <Info />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
