import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import CareType from '../components/CareType';
import TextSelectCareType from '../components/TextSelectCareType';
import { useNavigate } from 'react-router-dom';
import { getRepository } from '../utils/axios';

/*eslint-disable*/

const Address = () => {
  let navigate = useNavigate();
  const refContainer = useRef(1);
  const goBefore = () => {
    navigate('/care/select');
  };
  const goAfter = () => {
    navigate('/care/address');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const ModalEvent = () => {
    setIsModalOpen(!isModalOpen);
  };

  const checkModalOut = ({ target }) => {
    if (target.className.includes('modalOpenContainer')) ModalEvent();
  };

  const checkEnter = ({ code }) => {
    if (code === 'Enter') {
      start(inputValue, refContainer.current);
      refContainer.current++;
    }
  };

  const start = async (target, page) => {
    const res = await getRepository(target, page);
    const filterObj = JSON.parse(res.slice(1, res.length - 1))?.results?.juso;
    console.log(filterObj);
  };

  const changeValue = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  return (
    <ModalContainer>
      {isModalOpen ? (
        <ModalOpenContainer
          onClick={checkModalOut}
          className="modalOpenContainer"
        >
          <ModalDiv>
            <ModalOutDiv onClick={ModalEvent}>x</ModalOutDiv>
            <DetailInput
              placeholder={'🔍 주소 또는 건물명으로 검색'}
              onKeyPress={checkEnter}
              onChange={changeValue}
              value={inputValue}
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
              />
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
      )}
    </ModalContainer>
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

const ModalContainer = styled.div`
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
  color: purple;
  padding: 1%;
`;

const ContentDiv = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ModalOutDiv = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 10px;
  left: 50%;
  color: black;
  cursor: pointer;
`;

export default Address;
