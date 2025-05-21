import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, onTopicClick, darkMode}) => {
  return (
    <nav className={`top-nav-bar__topic-list ${darkMode ? 'dark' : ''}`}>
      {topics.map((topic) => (
        <span key={topic.id}>
          <TopicListItem 
          key={topic.id}
          topic={topic}
          onClick={() => onTopicClick(topic.id)}
          darkMode={darkMode}/>
        </span>
      ))}
    </nav>
  );
};

export default TopicList;
