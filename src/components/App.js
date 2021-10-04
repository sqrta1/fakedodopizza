import './App.css';
import { Container, Row, Col } from 'reactstrap';

import NavBar from './NavBar/NavBar';
import Stories from './Stories/Stories';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <NavBar />
            <Stories />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
