import styled from '@emotion/styled';
import React from 'react';
import Text from './Text';
import PropTypes from 'prop-types';
const CareType = ({ processNumber = 1 }) => {
  return (
    <CareTypeContainer>
      <CareTypeSubContainer>
        <Text
          text={'돌봄 유형'}
          fontSize={16}
          bold={'bold'}
          padding={'0px 3px 0px 0px'}
        />
        <Text
          text={String(processNumber)}
          fontSize={16}
          bold={'bold'}
          color={'#FF8450'}
          verticalMargin={'2px'}
        />
        <Text text={'/'} fontSize={16} bold={'bold'} verticalMargin={'2px'} />
        <Text text={'4'} fontSize={16} bold={'bold'} verticalMargin={'2px'} />
      </CareTypeSubContainer>
    </CareTypeContainer>
  );
};

const CareTypeContainer = styled.div`
  margin: 0 auto;
  width: 360px;
`;
const CareTypeSubContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-left: 16px;
`;

CareType.propTypes = {
  processNumber: PropTypes.number,
};

export default CareType;
