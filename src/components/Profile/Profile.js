import { Container, Row, Col } from 'reactstrap';

import personalaction from './personalaction.jpg';
import Input from '../Input/Input';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-actions">
        <Container>
          <Row>
            <Col>
              <div className="profile-actions-main">
                <h2>Персональные акции</h2>
                <div className="profile-actions-personal">
                  <img src={personalaction}></img>
                  <p>Персональные акции появятся здесь после заказа</p>
                </div>
                <a href="/bonusactions">Все наши акции</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="profile-info"></div>
    </div>
  );
}

export default Profile;
