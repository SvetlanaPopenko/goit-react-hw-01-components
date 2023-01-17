import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  padding: 6px;
  background-color: #26d2f3;
  box-shadow: inset 0px 1px 45px 1px #0571d5;
  width: 250px;
`;

export const FriendStatus = styled.span`
  display: inline-block;
  padding:5px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color:white;
  background-color: ${showStatus};
`;

function showStatus(props) {
    return props.isOnline ? "green" : "red";
}

export const FriendAvatar=styled.img`
    border-radius:25%;
margin-right: 10px;
    padding: 10px;
    box-shadow: 0px 0px 10px 2px rgba(117, 3, 248, 0.81);
`

export const FriendName=styled.p`
    color:#4d078e;
`