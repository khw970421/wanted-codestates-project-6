import * as React from 'react';
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

export default function Calandar() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <Container>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        sx={{
          width: 500,
        }}
      >
        <TextFieldContainer>
          <StaticDateRangePicker
            displayStaticWrapperAs="desktop"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} id={'abcdef'} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} className={'ffffff'} />
              </>
            )}
          />
        </TextFieldContainer>
      </LocalizationProvider>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
