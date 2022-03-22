import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Text from '../components/Text';
import CareType from '../components/CareType';
import TextSelectCareType from '../components/TextSelectCareType';
const Select = () => {
  return (
    <SelectContainer>
      <Header />
      <CareType processNumber={1} />
      <TextSelectCareType />
      <ButtonGroupContainer>
        <ButtonContainer>
          <Text
            text={'🌞'}
            bold={'bold'}
            fontSize={60}
            horizontalMargin={'10px 0px'}
          />
          <Text
            text={'24시간 상주'}
            color={'#5B5555'}
            bold={'bold'}
            fontSize={14}
            horizontalMargin={'8px 0px'}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Text
            text={'⏰'}
            bold={'bold'}
            fontSize={60}
            horizontalMargin={'10px 0px'}
          />
          <Text
            text={'시간제 돌봄'}
            color={'#5B5555'}
            bold={'bold'}
            fontSize={14}
            horizontalMargin={'8px 0px'}
          />
        </ButtonContainer>
      </ButtonGroupContainer>
    </SelectContainer>
  );
};

const SelectContainer = styled.div``;

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 160px;
  height: 144px;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  margin: 32px 4px;
`;

export default Select;
