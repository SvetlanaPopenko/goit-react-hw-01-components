import PropTypes from 'prop-types';
import { FriendCard } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <FriendCard key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
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
