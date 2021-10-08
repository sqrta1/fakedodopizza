import { Container, Row, Col } from 'reactstrap';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';

import './NavBar.css';

function NavBar() {
  return (
    <Container fluid={true}>
      <Row>
        <Col xl={{ size: 8, offset: 2 }}>
          <Header />
          <Nav />
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;
