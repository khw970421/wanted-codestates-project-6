import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Button from '../components/Button';
import CareType from '../components/CareType';
import TextSelectCareType from '../components/TextSelectCareType';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getStaticData } from '../utils/axios';
import DatePicker from 'react-datepicker';
import Text from '../components/Text';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/customDatePicker.css';

/* eslint-disable */
const careStartData = [
  '오전 8시',
  '오전 9시',
  '오전 10시',
  '오전 11시',
  '오전 12시',
  '오후 1시',
  '오후 2시',
  '오후 3시',
  '오후 4시',
  '오후 5시',
];

const Schedule = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const [selectDayCare, setSelectDayCare] = useState([]);
  const [minBeforeFirstScheduleVisitHour, setMinBeforeFirstScheduleVisitHour] =
    useState('');
  const selectTime = Object.entries(location?.state || {})
    ?.filter(([, value]) => value)
    ?.flat()[0];

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [careStartTime, setCareStartTime] = useState('오전 8시');
  const [dayCareTime, setDayCareTime] = useState(24);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const ConvertDateToStr = val => {
    return `${val.getFullYear()}-${('0' + (val.getMonth() + 1)).slice(-2)}-${(
      '0' + val.getDate()
    ).slice(-2)}`;
  };

  const checkButtonAvailable = () => {
    return (
      Boolean(startDate) &&
      Boolean(endDate) &&
      Boolean(careStartTime) &&
      Boolean(dayCareTime)
    );
  };

  const goBefore = () => {
    navigate('/care/select', {
      state: {
        workType: selectTime,
        schedule: {
          startDate,
          endDate,
          visitTime: careStartTime,
          hour: dayCareTime,
        },
      },
    });
  };
  const goAfter = () => {
    navigate('/care/address', {
      state: {
        workType: selectTime,
        schedule: {
          startDate: ConvertDateToStr(startDate),
          endDate: ConvertDateToStr(endDate),
          visitTime: careStartTime,
          hour: dayCareTime,
        },
      },
    });
  };

  const start = async () => {
    const res = await getStaticData();
    setSelectDayCare(res?.careHours);
    setMinBeforeFirstScheduleVisitHour(
      res.policy.minBeforeFirstScheduleVisitHour,
    );
  };

  useEffect(() => {
    start();
  }, []);

  const selectCareStartEvent = ({ target }) => {
    setCareStartTime(target.value);
  };
  const selectDayCareEvent = ({ target }) => {
    setDayCareTime(Number(target.value));
  };
  return (
    <ScheduleSideContainer>
      <ScheduleContainer>
        <Header clickBefore={goBefore} />
        <CareType processNumber={2} />
        <TextSelectCareType text={'돌봄 스케줄을 설정해주세요'} />
        <DateContainer>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange={true}
            inline
          />
        </DateContainer>
        <Text
          text={'돌봄 시간 선택'}
          textCenter={'normal'}
          padding={'5px 16px'}
        />
        <CustomSelect onChange={selectCareStartEvent}>
          {careStartData.map(val => (
            <option value={val} key={val}>
              {val}
            </option>
          ))}
        </CustomSelect>
        <Text
          text={'하루 돌봄 선택'}
          textCenter={'normal'}
          padding={'5px 16px'}
        />
        {selectTime === 'allTime' ? (
          <CustomSelect disabled>
            <option value="">24시간 상주</option>
          </CustomSelect>
        ) : (
          <CustomSelect onChange={selectDayCareEvent}>
            {selectDayCare.map(({ text, value }) => {
              return (
                <option value={value} key={value}>
                  {text}
                </option>
              );
            })}
          </CustomSelect>
        )}
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
            backgroundColor={checkButtonAvailable() ? '#FF8450' : '#E2E2E2'}
            color={'white'}
            margin={'8px 2px 8px 8px'}
            clickButton={goAfter}
            clickAble={checkButtonAvailable()}
          />
        </NavigateButtonGroupContainer>
      </ScheduleContainer>
    </ScheduleSideContainer>
  );
};
const ScheduleSideContainer = styled.div`
  background-color: #f6f4fc;
`;
const ScheduleContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 812px;
  background-color: white;
  position: relative;
`;

const CustomSelect = styled.select`
  margin: 16px;
  padding: 5px;
  border-radius: 3px;
`;

const DateContainer = styled.div`
  margin: 10px 16px;
`;

const NavigateButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  position: absolute;
  bottom: 10px;
`;
export default Schedule;
