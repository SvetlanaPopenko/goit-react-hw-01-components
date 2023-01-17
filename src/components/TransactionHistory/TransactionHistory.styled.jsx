import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto 50px auto;
  border: 2px solid red;
  padding: 0;
  width: 600px;
  box-shadow: inset 5px 15px 27px -10px rgba(0, 0, 0, 0.5);
`;
export const TableThead = styled.thead`
  text-align: center;
  margin: 0 auto;

  background-color: yellowgreen;
`;
export const TableTr = styled.tr`
  text-align: center;
  :hover {
    color: white;
    cursor: pointer;
  }
`;
export const TableTh = styled.th`
  font-size: 36px;
  font-weight: bold;
  background-color: greenyellow;
  padding: 10px;
`;
export const TableTd = styled.td`
  font-size: 32px;
  background-color: yellow;
  padding: 10px;
`;
