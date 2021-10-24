import { Container, Row, Col } from "reactstrap";

import Stories from "../Stories/Stories";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Offers from "../Offers/Offers";
import Info from "../../layout/Info/Info";
import Login from "../Login/Login";

import "./Main.css";

function Main() {
  return (
    <Container fluid={true}>
      <Container>
        <Stories />
      </Container>
      <Container fluid={true}>
        <SpecialOffers />
      </Container>
      <Container>
        <Offers />
        <Info />
      </Container>
    </Container>
  );
}

export default Main;
