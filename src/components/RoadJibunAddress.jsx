import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoadJibunAddress = ({
  roadAddr = '서울특별시 강남구 테헤란로 114(역삼동)',
  jibunAddr = '서울특별시 강남구 역삼동 824',
  zipNo = '',
  click,
}) => {
  return (
    <RoadJibunAddressContainer onClick={click}>
      <AddressContainer>
        <RoadAddress>{roadAddr}</RoadAddress>
        <JibunAddress>
          <CustomButton disabled>지번</CustomButton>
          <Jibun>{jibunAddr}</Jibun>
        </JibunAddress>
      </AddressContainer>
      {zipNo && <ZipContainer>{zipNo}</ZipContainer>}
    </RoadJibunAddressContainer>
  );
};

const RoadJibunAddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AddressContainer = styled.div``;
const RoadAddress = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #5b5555;
  margin: 16px 0px 8px 0px;
`;
const JibunAddress = styled.div`
  display: flex;
  margin: 0px 0px 16px 0px;
`;

const CustomButton = styled.button`
  background-color: #f6f6f6;
  font-size: 10px;
  border-radius: 3px;
  border: 0px;
  color: #b6b3b3;
  width: 40px;
  height: 20px;
  padding: 2px 8px;
`;

const Jibun = styled.div`
  font-size: 12px;
  color: #7d7878;
  width: 250px;
`;
const ZipContainer = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #5b5555;
`;

RoadJibunAddress.propTypes = {
  roadAddr: PropTypes.string,
  jibunAddr: PropTypes.string,
  zipNo: PropTypes.string,
  click: PropTypes.func,
};

export default RoadJibunAddress;
