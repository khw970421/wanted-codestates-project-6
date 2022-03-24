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
  borderRadius = 3,
  margin = '0px 0px 0px 0px',
  clickAble = true,
}) => {
  return (
    <CustomButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      onClick={clickButton}
      borderRadius={borderRadius}
      margin={margin}
      disabled={!clickAble}
    >
      {text}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  border: 0px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: bold;
  margin: ${({ margin }) => `${margin}`};
  cursor: pointer;
`;

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  clickButton: PropTypes.func,
  borderRadius: PropTypes.number,
  margin: PropTypes.string,
  clickAble: PropTypes.bool,
};

export default Button;
