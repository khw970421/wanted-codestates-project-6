import React from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
const Main = () => {
  let navigate = useNavigate();
  const goSelectPage = () => {
    navigate('/care/select');
  };
  return (
    <MainSideContainer>
      <MainContainer>
        <Text text={'어르신 돌보미'} fontSize={32} width={250} height={52} />
        <Text
          text={'케어코디'}
          fontSize={32}
          bold={'bold'}
          width={250}
          height={52}
          color={'#ff8450'}
        />
        <Button
          width={184}
          height={56}
          backgroundColor={'#FF8450'}
          color={'#ffffff'}
          fontSize={18}
          clickButton={goSelectPage}
        />
      </MainContainer>
    </MainSideContainer>
  );
};

const MainSideContainer = styled.div`
  background-color: ${props => props.theme.lightGray};
`;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
`;

export default Main;
