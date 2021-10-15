import Button from '../Button/Button';
import { Container, Row, Col } from 'reactstrap';
import './Header.css';
import navimg from './navlogo.svg';
import { LoginModal } from '../Login/Login';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';

function Header() {
  const [isModal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!isModal);
  };
  return (
    <Container>
      <Col>
        <Row>
          <div className="header">
            <div className="header-left">
              <div className="header-left-main">
                <img className="header-left-logo" src={navimg}></img>
                <div className="header-left-cityofdelivery">
                  <div className="header-left-cityname">
                    Доставка пиццы <span>Москва</span>
                  </div>
                  <div className="header-left-timerating">35 мин - 4.67 h</div>
                </div>
                <div className="header-left-phone">
                  <a href="tel:+89991119911">8 999 111-99-11</a>
                  <div>Звонок бесплатный</div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <Button text={'Додокоины'} hover={true} width={100} />
              <Button fsize={13} text={'Войти'} hover={true} width={75} onClick={toogleModal} />
              {isModal && (
                <Modal close={toogleModal}>
                  <Login></Login>
                </Modal>
              )}
            </div>
          </div>
        </Row>
      </Col>
    </Container>
  );
}

export default Header;
