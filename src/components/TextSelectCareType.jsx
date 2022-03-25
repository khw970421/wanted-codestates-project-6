import React from 'react';
import Text from './Text';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const TextSelectCareType = ({ text }) => {
  return (
    <TextSelectCareTypeContainer>
      <TextSelectCareTypeSubContainer>
        <Text text={text} fontSize={24} textCenter={'normal'} />
      </TextSelectCareTypeSubContainer>
    </TextSelectCareTypeContainer>
  );
};
const TextSelectCareTypeContainer = styled.div`
  width: 360px;
  margin: 0 auto;
`;

const TextSelectCareTypeSubContainer = styled.div`
  margin-top: 8px;
  margin-left: 16px;
`;

TextSelectCareType.propTypes = {
  text: PropTypes.string,
};
export default TextSelectCareType;
