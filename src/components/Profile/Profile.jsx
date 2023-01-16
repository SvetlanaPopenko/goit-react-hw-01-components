import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import { HiOutlineUserCircle } from 'react-icons/hi';
import {
  ProfileCard,
  UserCard,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItems,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <UserCard>
        <UserAvatar src={avatar} alt={username} width="200px" />
        <UserName>
          <HiOutlineUserCircle style={{ width: '36', height: '36' }} />
          {username}
        </UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>
          <GoLocation style={{ width: '36', height: '36' }} />
          {location}
        </UserLocation>
      </UserCard>

      <StatsList>
        <StatsItems>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItems>
        <StatsItems>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItems>
        <StatsItems>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItems>
      </StatsList>
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
