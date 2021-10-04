import styled from 'styled-components';

import './Button.css';

function Button({ hover, text, backgroundColor, color, fsize, width }) {
  return (
    <StyledButton backgroundColor={backgroundColor} hover={hover} width={width}>
      <StyledText color={color} fsize={fsize}>
        {text}
      </StyledText>
    </StyledButton>
  );
}

const DefaultButton = styled.button`
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledText = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fsize}px;
`;

const HoveredButton = styled(DefaultButton)`
  &:hover {
    ${StyledText} {
      color: black;
    }
  }
`;

const StyledButton = ({ hover = false, ...rest }) =>
  hover ? <HoveredButton {...rest} /> : <DefaultButton {...rest} />;
export default Button;
