import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Button = ({
  text = '신청하기',
  width,
  height,
  backgroundColor,
  color,
  fontSize,
  clickButton,
}) => {
  return (
    <CustomButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      onClick={clickButton}
    >
      {text}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ height }) => `${height}px`};
  border: 0px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: bold;
`;

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  clickButton: PropTypes.func,
};

export default Button;
