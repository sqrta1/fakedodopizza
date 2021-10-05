import { Container, Row, Col } from 'reactstrap';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';

import './NavBar.css';

function NavBar() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <Nav />
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;
