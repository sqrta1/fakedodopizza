import { Container, Row, Col } from 'reactstrap';

import SecretBuyer from '../SecretBuyer/SecretBuyer';
import FooterInfo from '../FooterInfo/FooterInfo';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-secretbuyer">
        <Container>
          <Row>
            <Col>
              <SecretBuyer />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-info">
        <Container>
          <Row>
            <Col>
              <FooterInfo />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
