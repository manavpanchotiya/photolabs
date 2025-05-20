import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, onTopicClick}) => {
  return (
    <nav className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <span key={topic.id}>
          <TopicListItem 
          key={topic.id}
          topic={topic}
          onClick={() => onTopicClick(topic.id)}/>
        </span>
      ))}
    </nav>
  );
};

export default TopicList;
