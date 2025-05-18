import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
  return (
    <nav className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <span key={topic.id}>
          <TopicListItem topic={topic}/>
        </span>
      ))}
    </nav>
  );
};

export default TopicList;
