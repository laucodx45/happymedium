import { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { applicationContext } from '../hooks/applicationContext';
import '../styles/SubmissionStatusModal.css'

function SubmissionMsgModal(props) {
  const {state, dispatch} = useContext(applicationContext);
  
  const show = state.messageModalStatus
  const handleClose = () => {
    dispatch({type: 'setMessageModalStatus', payload: false})
    dispatch({type: 'setFormSubmissionSuccess', payload: false})
    dispatch({type: 'setFormSubmissionError', payload: false})
  }

  const modalMessage = (submissionSuccess, submissionError) => {
    if (submissionError) {
      return 'An error has occurred. Please try again.'
    }
    if (submissionSuccess) {
      return 'Your message has been successfully sent!'
    }
  }

  return (
    <>
      <Modal id='submission-status-modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{state.formSubmissionSuccess ? 'Thankyou!' : 'Sorry!'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage(state.formSubmissionSuccess, state.formSubmissionError)}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default SubmissionMsgModal;