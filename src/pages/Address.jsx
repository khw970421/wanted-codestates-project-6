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
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
/*eslint-disable*/

const Address = () => {
  const location = useLocation();
  const locationState = location.state;
  let navigate = useNavigate();
  const refContainer = useRef(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchAddressArr, setSearchAddressArr] = useState([]);
  const [detailInputValue, setDetailInputValue] = useState('');
  const [searchTotalCount, setSearchTotalCount] = useState(0);
  const [apiMesseage, setApiMessage] = useState('');
  const [addressData, setAddressData] = useState({});
  const [searchCount, setSearchCount] = useState([]);

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

  const checkEnter = async ({ code }) => {
    if (code === 'Enter') {
      const totalCount = await start(inputValue, 1);
      refContainer.current = 1;
      setSearchCount(checkTotalCountPage(totalCount));
    }
  };

  const checkTotalCountPage = count => {
    if (count <= 25) {
      // 할수있는 페이지만큼 생성
      return Array.from({ length: Math.ceil(count / 5) }, (_, i) => i + 1);
    } else {
      return [1, 2, 3, 4, 5];
    }
  };

  // 주소 api 가져와서 처리
  const start = async (target, page) => {
    const res = await getRepository(target, page);
    const filterObj = JSON.parse(res.slice(1, res.length - 1))?.results?.juso;
    const totalCount = JSON.parse(res.slice(1, res.length - 1))?.results?.common
      ?.totalCount;
    setSearchTotalCount(totalCount);
    setApiMessage(
      JSON.parse(res.slice(1, res.length - 1))?.results?.common?.errorMessage,
    );
    if (
      JSON.parse(res.slice(1, res.length - 1))?.results?.common
        ?.errorMessage !== '정상'
    ) {
      alert(
        JSON.parse(res.slice(1, res.length - 1))?.results?.common?.errorMessage,
      );
    } else {
      setSearchAddressArr(filterObj || []);
    }
    return totalCount;
  };

  const changeValue = ({ target }) => {
    setInputValue(target.value);
  };

  const clickIdx = e => {
    refContainer.current = Number(e.target.id);
    start(inputValue, refContainer.current);
  };

  const findLeft = () => {
    if (searchCount[0] !== 1) {
      refContainer.current = searchCount[0] - 5;
      start(inputValue, refContainer.current);

      // 현재 위치에서부터 이전껏은 무조건 5개를 만족시키니 Array.from으로 5개 적용
      setSearchCount(
        Array.from({ length: 5 }, (_, i) => refContainer.current + i),
      );
    } else {
      alert('첫번째 페이지입니다.');
    }
  };
  const findRight = () => {
    if (searchCount.length === 5) {
      refContainer.current = searchCount[0] + 5;
      start(inputValue, refContainer.current);

      // 5개의 배열중에서 마지막 페이지 전체 Math.ceil(count/5) 를 한 것보다 작거나 같은 것들만 처리
      setSearchCount(
        Array.from({ length: 5 }, (_, i) => refContainer.current + i).filter(
          val => val <= Math.ceil(searchTotalCount / 5),
        ),
      );
    } else {
      alert('마지막 페이지입니다.');
    }
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
            <DetailInput
              placeholder={'🔍 주소 또는 건물명으로 검색'}
              onKeyPress={checkEnter}
              onChange={changeValue}
              value={inputValue}
            />
            {searchAddressArr.map(road => (
              <RoadJibunAddress
                key={road.bdMgtSn}
                roadAddr={road.roadAddr}
                jibunAddr={road.jibunAddr}
                zipNo={road.zipNo}
                click={() => {
                  clickAddress(road);
                }}
              />
            ))}
            {searchAddressArr.length !== 0 && (
              <SearchCountContainer>
                <FaArrowLeft onClick={findLeft} />
                {searchCount.map((val, idx) => (
                  <SearchCount
                    key={idx}
                    id={val}
                    onClick={clickIdx}
                    isBold={refContainer.current === val}
                  >
                    {val}
                  </SearchCount>
                ))}
                <FaArrowRight onClick={findRight} />
              </SearchCountContainer>
            )}
            {apiMesseage !== '' && searchAddressArr.length === 0 && (
              <div> 검색 결과가 없습니다.</div>
            )}
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

const SearchCountContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchCount = styled.div`
  margin: 0px 8px;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: ${({ isBold }) => (isBold ? '18px' : '14px')};
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
