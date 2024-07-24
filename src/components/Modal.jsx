import * as React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../hooks/applicationContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Modal.css';
import PhotoGallery from './PhotoGallery';
import { ModalBody } from 'react-bootstrap';
import Loader from './Spinner';

export default function PhotoDetailsModal() {

  const {state, dispatch} = useContext(applicationContext);

  const show = state.modal;
  const handleClose = () => {
    dispatch({type: 'toggleModal'});
    dispatch({type: 'setModalPhotoData', payload: null})
  }
  
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='custom-modal-title lora-unique-700'>{state.modalPhotoCaption.title}</Modal.Title>
        </Modal.Header>
        {!state.modalLoadingStatus && state.modalPhotoData && <PhotoGallery modalPhotos={state.modalPhotoData} />}
        {state.modalLoadingStatus && <Loader />}
        <ModalBody className="custom-modal-body lora-unique-400">
          {state.modalPhotoCaption.caption}
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

