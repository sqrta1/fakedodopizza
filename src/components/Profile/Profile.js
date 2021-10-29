import { Container, Row, Col } from "reactstrap";
import Button from "../Button/Button";
import personalaction from "./personalaction.jpg";
import Input from "../Input/Input";
import "./Profile.css";
import { useHistory } from "react-router";

const logout = async (history) => {
  const jwt = localStorage.getItem("jwt");
  localStorage.removeItem("jwt");
  fetch("logut", { method: "POST", body: JSON.stringify({ jwt: jwt }) }).then(
    (r) => r.json()
  );
  history.push("/");
};

function Profile() {
  const history = useHistory();
  const handleLogout = () => {
    logout(history);
  };
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
      <div className="profile-info">
        <Container>
          <Button text="Выйти" width="70" onClick={handleLogout}></Button>
        </Container>
      </div>
    </div>
  );
}

export default Profile;
