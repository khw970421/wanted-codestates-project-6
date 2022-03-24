import React, { useEffect } from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { postRegisterData } from '../utils/axios';

const Submit = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const goMain = () => {
    navigate('/');
  };
  useEffect(async () => {
    console.log(location.state);
    const res = await postRegisterData(location.state);
    alert(res.message);
  }, []);
  return (
    <SubmitSideContainer>
      <SubmitContainer>
        <Title>
          <Text
            text={'돌보미 신청하기'}
            fontSize={16}
            bold={'bold'}
            color={'#5B5555'}
          />
        </Title>
        <SubTitle>
          <Text
            text={'📱 신청이 완료되었습니다!'}
            fontSize={24}
            bold={'bold'}
            color={'#5B5555'}
          />
        </SubTitle>
        <TextContainer>
          <Text
            text={
              '신청하신 내용을 보고 케어코디님들이 지원할 예정입니다.케어코디님들이 신청할 때 마다 앱이나 문자로 알림을 보내드립니다.'
            }
          />
          <Text text={'케어코디님의 지원 알림을 기다려주세요!'} />
        </TextContainer>
        <ButtonContainer>
          <Button
            width={60}
            height={40}
            padding={16}
            text={'끝내기'}
            clickButton={goMain}
            color={'#7D7878'}
          />
        </ButtonContainer>
      </SubmitContainer>
    </SubmitSideContainer>
  );
};

const SubmitSideContainer = styled.div`
  background-color: '#F6F4FC';
`;
const SubmitContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  background-color: white;
  position: relative;
`;

const Title = styled.div`
  padding: 15px;
`;
const SubTitle = styled.div`
  padding: 24px 16px;
`;
const TextContainer = styled.div`
  padding: 8px 16px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export default Submit;
