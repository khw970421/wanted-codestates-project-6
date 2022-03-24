import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import Text from './Text';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
const Header = ({ clickBefore }) => {
  return (
    <HeaderContainer>
      <IconContainer>
        <MdArrowBackIos
          size={20}
          style={{ margin: '20px' }}
          onClick={clickBefore}
        />
      </IconContainer>
      <Text
        text={'돌보미 신청하기'}
        fontSize={16}
        bold={'bold'}
        color={'#5B5555'}
        verticalMargin={'20px'}
        horizontalMargin={'20px'}
      />
      <div></div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 360px;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

Header.propTypes = {
  clickBefore: PropTypes.func,
};

export default Header;
