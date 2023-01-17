import PropTypes from 'prop-types';
import { FriendCard, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <FriendCard key={id}>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id:PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
