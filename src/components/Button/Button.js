import styled from 'styled-components';

import './Button.css';

function Button({ hover, text, backgroundColor, color, fsize, width, margin, ...props }) {
  return (
    <StyledButton backgroundColor={backgroundColor} hover={hover} width={width} {...props}>
      <StyledText color={color} fsize={fsize} margin={margin}>
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
  margin: ${(props) => props.margin};
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
