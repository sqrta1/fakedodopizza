import './App.css';
import { Container, Row, Col } from 'reactstrap';

import NavBar from './NavBar/NavBar';
import Stories from './Stories/Stories';
import SpecialOffers from './SpecialOffers/SpecialOffers';
import Offers from './Offers/Offers';
import Info from './Info/Info';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <NavBar />
            <Stories />
            <SpecialOffers />
            <Offers />
            <Info />
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
