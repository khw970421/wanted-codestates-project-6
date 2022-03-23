import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Button from '../components/Button';
import CareType from '../components/CareType';
import TextSelectCareType from '../components/TextSelectCareType';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const selectTime = Object.entries(location?.state || {})
    ?.filter(([, value]) => value)
    ?.flat()[0];

  const goBefore = () => {
    navigate('/care/select');
  };
  const goAfter = () => {
    navigate('/care/address', { state: { selectTime } });
  };

  return (
    <ScheduleSideContainer>
      <ScheduleContainer>
        <Header clickBefore={goBefore} />
        <CareType processNumber={2} />
        <TextSelectCareType text={'돌봄 스케줄을 설정해주세요'} />
        {selectTime === 'allTime' ? <div>alltime</div> : <div>partTime</div>}
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
      </ScheduleContainer>
    </ScheduleSideContainer>
  );
};
const ScheduleSideContainer = styled.div`
  background-color: ${props => props.theme.lightGray};
`;
const ScheduleContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  background-color: ${props => props.theme.white};
  position: relative;
`;
const NavigateButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  position: absolute;
  bottom: 10px;
`;
export default Schedule;
