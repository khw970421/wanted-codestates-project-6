import React from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Submit = () => {
  let navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };
  return (
    <SubmitSideContainer>
      <SubmitContainer>
        <Text text={'돌보미 신청하기'} fontSize={16} />
        <Text text={'📱 신청이 완료되었습니다!'} fontSize={24} />
        <Text
          text={
            '신청하신 내용을 보고 케어코디님들이 지원할 예정입니다.케어코디님들이 신청할 때 마다 앱이나 문자로 알림을 보내드립니다.'
          }
        />
        <Text text={'케어코디님의 지원 알림을 기다려주세요!'} />
        <ButtonContainer>
          <Button
            width={60}
            height={40}
            padding={16}
            text={'끝내기'}
            clickButton={goMain}
          />
        </ButtonContainer>
      </SubmitContainer>
    </SubmitSideContainer>
  );
};

const SubmitSideContainer = styled.div`
  background-color: ${props => props.theme.lightGray};
`;
const SubmitContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  background-color: ${props => props.theme.white};
  position: relative;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export default Submit;
