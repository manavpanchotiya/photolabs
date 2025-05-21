import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, favourites, onTopicClick, toggleDarkMode, darkMode }) => {
  return (
    <div className={`top-nav-bar ${darkMode ? 'dark' : ''}`}>
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick} darkMode={darkMode} />
      <FavBadge isFavPhotoExist={favourites.length > 0}/>
      <button className='toggle-dark-mode-btn' onClick={toggleDarkMode}>Toggle Dark Mode 🌓</button>
      
    </div>
  )
};

export default TopNavigation;
