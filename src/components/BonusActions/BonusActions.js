import { Container, Row, Col } from 'reactstrap';

import BonusActionsItem from '../BonusActionsItem/BonusActionsItem';

import './BonusActions.css';

function BonusActions() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="bonusactions">
            <h2>Акции</h2>
            <div className="bonusactions-content">
              <BonusActionsItem />
              <BonusActionsItem />
              <BonusActionsItem />
              <BonusActionsItem />
              <BonusActionsItem />
              <BonusActionsItem />
              <BonusActionsItem />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BonusActions;
