/*eslint-disable*/
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import CareType from '../components/CareType';
import Text from '../components/Text';
import TextSelectCareType from '../components/TextSelectCareType';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getRepository } from '../utils/axios';
import RoadJibunAddress from '../components/RoadJibunAddress';
import Page from '../components/Page';

const Address = () => {
  const location = useLocation();
  const locationState = location.state;
  let navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [detailInputValue, setDetailInputValue] = useState('');
  const [addressData, setAddressData] = useState({});

  const goBefore = () => {
    navigate('/care/schedule', {
      state: {
        ...locationState,
        address: {
          locationCode: addressData.zipNo,
          roadCode: addressData.emdNo,
          roadAddress: addressData.roadAddrPart1,
          jibunAddress: addressData.jibunAddr,
          sidoName: addressData.siNm,
          sigunguName: addressData.roadAddrPart2,
          liName: addressData.liNm,
          addressDetail: detailInputValue,
          myundongName: addressData.buldMnnm,
        },
      },
    });
  };
  const goAfter = () => {
    navigate('/care/result', {
      state: {
        ...locationState,
        address: {
          locationCode: addressData.zipNo,
          roadCode: addressData.emdNo,
          roadAddress: addressData.roadAddrPart1,
          jibunAddress: addressData.jibunAddr,
          sidoName: addressData.siNm,
          sigunguName: addressData.sggNm,
          liName: addressData.liNm,
          addressDetail: detailInputValue,
          myundongName: addressData.buldMnnm,
        },
      },
    });
  };

  const ModalEvent = e => {
    setIsModalOpen(!isModalOpen);
  };

  const checkModalOut = ({ target }) => {
    if (target?.className && target?.className.includes('modalOpenContainer'))
      ModalEvent();
  };

  const clickAddress = addrObj => {
    setSearchInputValue(addrObj.roadAddr);
    setAddressData(addrObj);
    setIsModalOpen(!isModalOpen);
  };

  const changeDetailInputValue = ({ target }) => {
    setDetailInputValue(target.value);
  };

  const checkButtonAble = () =>
    detailInputValue !== '' && Object.keys(addressData).length !== 0;
  return (
    <ModalContainer>
      {isModalOpen ? (
        <ModalOpenContainer
          onClick={checkModalOut}
          className="modalOpenContainer"
        >
          <ModalDiv onClick={e => e.stopPropagation()}>
            <ModalTitle>
              <div></div>
              <Text text={'주소 검색'} fontSize={16} />
              <ModalOutDiv onClick={ModalEvent}>x</ModalOutDiv>
            </ModalTitle>
            <Page
              clickAddress={road => {
                clickAddress(road);
              }}
            />
          </ModalDiv>
        </ModalOpenContainer>
      ) : (
        <AddressSideContainer>
          <AddressContainer>
            <Header clickBefore={goBefore} />
            <CareType processNumber={3} />
            <TextSelectCareType text={'돌봄 주소를 입력해주세요'} />
            <DetailInputContainer>
              <DetailInput
                placeholder={'🔍 주소 또는 건물명으로 검색'}
                onClick={ModalEvent}
                defaultValue={searchInputValue}
              />
              <DetailInput
                placeholder={'상세 주소를 입력해주세요'}
                onChange={changeDetailInputValue}
                value={detailInputValue}
              />
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
                backgroundColor={checkButtonAble() ? '#FF8450' : '#e2e2e2'}
                color={'white'}
                margin={'8px 2px 8px 8px'}
                clickButton={goAfter}
                clickAble={checkButtonAble()}
              />
            </NavigateButtonGroupContainer>
          </AddressContainer>
        </AddressSideContainer>
      )}
    </ModalContainer>
  );
};
const AddressSideContainer = styled.div``;
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
  width: 320px;
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

const ModalContainer = styled.div`
  background-color: #f6f4fc;
  display: flex;
  justify-content: center;
`;

const ModalBtn = styled.button`
  background: purple;
  width: ${({ width }) => width}vh;
  height: ${({ height }) => height}vh;
  min-height: 50px;
  min-width: 100px;
  border-radius: ${({ height }) => height}vh;
  color: white;
  border: 0px;
  cursor: pointer;
`;

const ModalOpenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 340px;
  height: 700px;
  border-radius: 3vh;
  padding: 1%;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentDiv = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ModalOutDiv = styled.div`
  cursor: pointer;
  margin: 0px 10px;
`;

export default Address;
