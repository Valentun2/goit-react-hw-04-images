import { useState } from 'react';
import { Photo, PhotoModal } from './ImageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  },
};
Modal.setAppElement('#root');

const ImageGalleryItem = props => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Photo src={props.src} alt="photo" onClick={onClick} />

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <PhotoModal src={props.srcModal} alt="photo" />
      </Modal>
    </>
  );
};

export default ImageGalleryItem;
