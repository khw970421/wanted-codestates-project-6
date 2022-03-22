import React from 'react';
import Text from './Text';
import styled from 'styled-components';
const TextSelectCareType = () => {
  return (
    <TextSelectCareTypeContainer>
      <TextSelectCareTypeSubContainer>
        <Text
          text={'돌봄 유형을 선택해주세요'}
          fontSize={24}
          bold={'bold'}
          textCenter={'normal'}
        />
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

export default TextSelectCareType;
