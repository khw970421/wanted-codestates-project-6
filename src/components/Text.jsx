import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Text = ({
  text = '신청하기',
  fontSize,
  bold = 'normal',
  color = '#000000',
  width,
  height,
}) => {
  return (
    <CustomText
      fontSize={fontSize}
      bold={bold}
      color={color}
      width={width}
      height={height}
    >
      {text}
    </CustomText>
  );
};

const CustomText = styled.div`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  text-align: center;
`;
Text.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  bold: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default Text;
