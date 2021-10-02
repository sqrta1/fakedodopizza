import './App.css';
import { Container, Row, Col } from 'reactstrap';

import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
