import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, onClick}) => {
  return (
    <div className="topic-list__item">
      <button onClick={onClick}> {topic.title}</button>
    </div>
  );
};

export default TopicListItem;
