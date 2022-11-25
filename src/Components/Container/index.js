import React from 'react'
import {Wrapper, Stack} from "./style";
import Calculate from '../Calculate';
import Indicator from '../Indicator';
import History from '../History';

function Container() {
  return (
    <>
    <h1>BMI Calculater App</h1>
      <Wrapper>
        <Stack>
          <Indicator />
        </Stack>
        <Stack>
        <Calculate />
        </Stack>
      </Wrapper>
      <Wrapper>
        <History />
      </Wrapper>
    </>
  )
}

export default Container