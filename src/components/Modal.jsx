import * as React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../hooks/applicationContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Modal.css';
import PhotoGallery from './PhotoGallery';
import { ModalBody } from 'react-bootstrap';
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
          <Modal.Title>photo id :{state.photoId}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
        {/* {state.modalPhotoData && (
          <div >
            {state.modalPhotoData.map((photosrc) => (
              <img style={{width: '100px'}}key={photosrc} src={photosrc} alt="" />
            ))}
          </div>
        )} */}
        {state.modalPhotoData && <PhotoGallery modalPhotos={state.modalPhotoData}/>}
        
        <ModalBody>
          {state.modalPhotoCaption}
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

