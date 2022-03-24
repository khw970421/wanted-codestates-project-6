import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Text from '../components/Text';
import CareType from '../components/CareType';
import TextSelectCareType from '../components/TextSelectCareType';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Select = () => {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState({ allTime: false, partTime: false });
  const goBefore = () => {
    navigate('/');
  };
  const goAfter = () => {
    navigate('/care/schedule', { state: clicked });
  };

  const clickAllTime = () => {
    setClicked({ allTime: !clicked.allTime, partTime: false });
  };
  const clickPartTime = () => {
    setClicked({ allTime: false, partTime: !clicked.partTime });
  };
  return (
    <SelectSideContainer>
      <SelectContainer>
        <Header clickBefore={goBefore} />
        <CareType processNumber={1} />
        <TextSelectCareType text={'돌봄 스케줄을 설정해주세요'} />
        <ButtonGroupContainer>
          <ButtonContainer clicked={clicked.allTime} onClick={clickAllTime}>
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
              clicked={clicked.allTime}
            />
          </ButtonContainer>
          <ButtonContainer clicked={clicked.partTime} onClick={clickPartTime}>
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
              clicked={clicked.partTime}
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
            backgroundColor={
              clicked.allTime || clicked.partTime ? '#FF8450' : '#E2E2E2'
            }
            color={'white'}
            margin={'8px 2px 8px 8px'}
            clickButton={goAfter}
            clickAble={clicked.allTime || clicked.partTime}
          />
        </NavigateButtonGroupContainer>
      </SelectContainer>
    </SelectSideContainer>
  );
};
const SelectSideContainer = styled.div`
  background-color: '#F6F4FC';
`;
const SelectContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  background-color:'white'
  position: relative;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 160px;
  height: 144px;
  border: 1px solid '#e2e2e2';
  border-radius: 5px;
  margin: 32px 4px;
  background-color: ${({ clicked }) => (clicked ? '#FF8450' : '#ffffff')};
`;

const NavigateButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  position: absolute;
  bottom: 10px;
`;

export default Select;
