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
  verticalMargin = '0px 0px',
  horizontalMargin = '0px 0px',
  textCenter = 'center',
  clicked = false,
}) => {
  return (
    <CustomText
      fontSize={fontSize}
      bold={bold}
      color={color}
      width={width}
      height={height}
      verticalMargin={verticalMargin}
      horizontalMargin={horizontalMargin}
      textCenter={textCenter}
      clicked={clicked}
    >
      {text}
    </CustomText>
  );
};

const CustomText = styled.div`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ clicked, color }) => (clicked ? '#ffffff' : color)};
  font-weight: ${({ bold }) => bold};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  margin: ${({ verticalMargin, horizontalMargin }) =>
    `${horizontalMargin} ${verticalMargin}`};
  text-align: ${({ textCenter }) => `${textCenter}`};
`;
Text.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  bold: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  verticalMargin: PropTypes.string,
  horizontalMargin: PropTypes.string,
  textCenter: PropTypes.string,
  clicked: PropTypes.bool,
};
export default Text;
