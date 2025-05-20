import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, favourites, onTopicClick}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      <FavBadge isFavPhotoExist={favourites.length > 0}/>
      
    </div>
  )
};

export default TopNavigation;
