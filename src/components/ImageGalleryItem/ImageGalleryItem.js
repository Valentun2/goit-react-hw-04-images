import { Component } from 'react';
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

class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  onClick = evt => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <Photo src={this.props.src} alt='photo'  onClick={this.onClick} />

        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <PhotoModal src={this.props.srcModal} alt='photo' />
        </Modal>
      </>
    );
  }
}

export default ImageGalleryItem;
