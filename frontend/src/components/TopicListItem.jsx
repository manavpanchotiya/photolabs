import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, onClick}) => {
  return (
    <div className="topic-list__item">
      <button className="photo-topic-button" onClick={onClick}> {topic.title}</button>
    </div>
  );
};

export default TopicListItem;
