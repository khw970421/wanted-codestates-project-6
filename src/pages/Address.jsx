import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import CareType from '../components/CareType';
import TextSelectCareType from '../components/TextSelectCareType';
import { useNavigate } from 'react-router-dom';
// import { getRepository } from '../utils/axios';
const Address = () => {
  let navigate = useNavigate();
  const goBefore = () => {
    navigate('/care/select');
  };
  const goAfter = () => {
    navigate('/care/address');
  };
  // const start = async () => {
  //   const res = await getRepository('한국', 1);
  //   const filterObj = JSON.parse(res.slice(1, res.length - 1))?.results?.juso;
  //   console.log(filterObj);
  // };
  // start();
  return (
    <AddressSideContainer>
      <AddressContainer>
        <Header clickBefore={goBefore} />
        <CareType processNumber={3} />
        <TextSelectCareType text={'돌봄 주소를 입력해주세요'} />
        <DetailInputContainer>
          <DetailInput placeholder={'🔍 주소 또는 건물명으로 검색'} />
          <DetailInput placeholder={'상세 주소를 입력해주세요'} />
        </DetailInputContainer>
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
      </AddressContainer>
    </AddressSideContainer>
  );
};
const AddressSideContainer = styled.div`
  background-color: #f6f4fc;
`;
const AddressContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  background-color: white;
  position: relative;
`;

const DetailInputContainer = styled.div`
  margin: 20px 0px;
`;

const DetailInput = styled.input`
  width: 328px;
  height: 48px;
  padding: 14px;
  box-sizing: border-box;
  margin: 4px 16px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
`;

const NavigateButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  position: absolute;
  bottom: 10px;
`;
export default Address;
