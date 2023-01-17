import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  border-radius: 30px;
  background-color: #8a2be266;
  box-shadow: inset 5px 15px 27px -10px rgba(0, 0, 0, 0.5);
`;

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
export const UserAvatar = styled.img`
  border-radius: 50%;
  background-color: #fff;
`;
export const UserName = styled.p`
  margin: 0 auto;
  font-weight: bold;
  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
export const UserTag = styled.p`
  margin: 0 auto;
  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
export const UserLocation = styled.p`
  margin: 0 auto;
  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
`;

export const StatsItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  outline: 1px solid grey;
  padding: 0 20px;
  width: 33.33%;
  :hover {
    background-color: violet;
    cursor: pointer;
    color: #ffffff;
  }
`;

export const StatsLabel = styled.span`
  margin-bottom: 10px;
  font-size: 24px;
`;
export const StatsQuantity = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;
