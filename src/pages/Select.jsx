import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Text from '../components/Text';
import CareType from '../components/CareType';
import TextSelectCareType from '../components/TextSelectCareType';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
const Select = () => {
  let navigate = useNavigate();

  const goBefore = () => {
    navigate('/');
  };
  const goAfter = () => {
    navigate('/care/schedule');
  };
  return (
    <SelectSideContainer>
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
        <NavigateButtonGroupContainer>
          <Button
            text={'이전'}
            width={58}
            height={48}
            margin={'8px 8px 8px 2px'}
            clickButton={goBefore}
          />
          <Button
            text={'다음'}
            width={268}
            height={48}
            backgroundColor={'#FF8450'}
            color={'white'}
            margin={'8px 2px 8px 8px'}
            clickButton={goAfter}
          />
        </NavigateButtonGroupContainer>
      </SelectContainer>
    </SelectSideContainer>
  );
};
const SelectSideContainer = styled.div`
  background-color: ${props => props.theme.lightGray};
`;
const SelectContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  background-color: ${props => props.theme.white};
  position: relative;
`;

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

const NavigateButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  position: absolute;
  bottom: 10px;
`;

export default Select;
