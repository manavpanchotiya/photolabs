import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  /* Insert React */
  const { id, location, urls, user } = photo;
  return(
      <div className="photo-list-item" key={id}>
      <img src={urls.regular} alt="Regular size image" className="photo-regular" />
      <div className="photographer-info">
        <img
          src={user.profile}
          alt={`${user.username}'s profile`}
          className="profile-pic"
        />
        <div className="username">{user.name}</div>
      </div>
      <div className="location">{`${location.city}, ${location.country}`}</div>
    </div>
  )

};

export default PhotoListItem;
