import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/RandomColor';

export const StatisticsSection=styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 600px;
    border-radius:20px;
    background-color:pink;
`
export const StatisticsTitle=styled.h2`
    font-size:48px;
background-color:pink;
margin: 0;

`
export const StatisticsList=styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
   
`
export const StatisticItem = styled.li`
    display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${getRandomHexColor};
`