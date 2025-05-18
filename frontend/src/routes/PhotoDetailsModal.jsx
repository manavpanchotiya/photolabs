import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({setDisplayModal}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={()=> setDisplayModal(false)} />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
