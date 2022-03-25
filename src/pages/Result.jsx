import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Button from '../components/Button';
import CareType from '../components/CareType';
import TextSelectCareType from '../components/TextSelectCareType';
import RoadJibunAddress from '../components/RoadJibunAddress';
import Text from '../components/Text';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const [phone, setPhone] = useState('');

  //Finish : 번호 validation 체크
  const changePhoneNumber = ({ target }) => {
    let chkStyle = /^[0-9]*$/;
    if (chkStyle.test(target.value)) setPhone(target.value);
  };
  let navigate = useNavigate();
  const goBefore = () => {
    navigate('/care/address', {
      state: { ...locationState, phoneNumber: phone },
    });
  };
  const goAfter = () => {
    navigate('/care/submit', {
      state: { ...locationState, phoneNumber: phone },
    });
  };
  const locationState = location.state;
  return (
    <ResultSideContainer>
      <ResultContainer>
        <Header clickBefore={goBefore} />
        <CareType processNumber={4} />
        <TextSelectCareType
          text={
            '인증하신 휴대폰 번호로 케어코디 프로필을 받아보실 수 있어요 ☺️ '
          }
        />
        <ResultReportContainer>
          <Title>
            <Text text={'신청 내역'} textCenter={'normal'} fontSize={16} />
          </Title>
          <SelectContainer>
            <Text text={'돌봄 유형'} textCenter={'normal'} bold={'bold'} />
            {locationState.selectTime === 'partTime' ? (
              <Text text={'🌞 24시간 상주'} textCenter={'normal'} />
            ) : (
              <Text text={'⏰ 시간제 돌봄'} textCenter={'normal'} />
            )}
          </SelectContainer>
          <RoadJibunAddressContainer>
            <Text text={'돌봄주소'} textCenter={'normal'} bold={'bold'} />
            <RoadJibunAddress
              roadAddr={locationState.address.roadAddress}
              jibunAddr={locationState.address.jibunAddress}
            />
            <div>{locationState.address.detailAddr}</div>
          </RoadJibunAddressContainer>
        </ResultReportContainer>
        <PhoneInput
          type="text"
          onChange={changePhoneNumber}
          placeholder="전화번호를 입력해주세요 (숫자만 입력해주세요.)"
          value={phone}
        ></PhoneInput>
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
            backgroundColor={phone ? '#FF8450' : '#E2E2E2'}
            color={'white'}
            margin={'8px 2px 8px 8px'}
            clickButton={goAfter}
            clickAble={phone}
          />
        </NavigateButtonGroupContainer>
      </ResultContainer>
    </ResultSideContainer>
  );
};

const ResultSideContainer = styled.div`
  background-color: #f6f4fc;
`;
const ResultContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  background-color: white;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;
const RoadJibunAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const ResultReportContainer = styled.div`
  margin: 20px;
`;

const PhoneInput = styled.input`
  padding: 14px 16px;
  margin: 16px;
  width: 328px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #eeeeee;
`;

const NavigateButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  position: absolute;
  bottom: 10px;
`;

export default Result;
