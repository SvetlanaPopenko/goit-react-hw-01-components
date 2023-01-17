import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/RandomColor';

export const StatisticsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  border-radius: 20px;
  background-color: pink;
  box-shadow: inset 5px 15px 27px -10px rgba(0, 0, 0, 0.5);
`;
export const StatisticsTitle = styled.h2`
  font-size: 48px;
  margin: 0;
`;
export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StatisticItem = styled.li`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${getRandomHexColor};
`;

export const StatisticsLabel = styled.span`
    color: white;
`
export const StatisticsPercentage = styled.span`
    color: white;
`