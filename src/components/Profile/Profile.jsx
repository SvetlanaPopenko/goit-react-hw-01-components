import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { ProfileCard, UserCard,UserAvatar, UserName, UserTag,UserLocation } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <UserCard>
        <UserAvatar src={avatar} alt={username} width="200px"/>
        <UserName><HiOutlineUserCircle style={{width: "36", height: "36"}} />{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation><GoLocation style={{width: "36", height: "36"}} />{location}</UserLocation>
      </UserCard>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
