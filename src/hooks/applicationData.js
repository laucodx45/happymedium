import { useEffect, useReducer } from "react";
import { newImageData } from "../lib/images";

const initialState = {
  modal: false,
  photoId: null,
  modalPhotoData: [],
  modalPhotoCaption: {},
  formSubmissionSuccess: false,
  formSubmissionError: false,
  modalLoadingStatus: false,
  messageModalStatus: false,
}

export function reducer(state, action) {
  switch(action.type) {
    case 'toggleModal' :
      return {
        ...state,
        modal: !state.modal,
      }
    case 'setPhotoId' :
      return {
        ...state,
        photoId: action.payload
      }
    case 'setModalPhotoData' :
      return {
        ...state,
        modalPhotoData: action.payload,
      }
    case 'setModalPhotoCaption' :
      return {
        ...state,
        modalPhotoCaption: action.payload,
      }
    case 'setFormSubmissionSuccess' :
      return {
        ...state,
        formSubmissionSuccess: action.payload,
      }
    case 'setFormSubmissionError' :
      return {
        ...state,
        formSubmissionError: action.payload,
      }
    case 'setModalLoadingStatus' :
      return {
        ...state,
        modalLoadingStatus: action.payload,
      }
    case 'setMessageModalStatus' :
      return {
        ...state,
        messageModalStatus: action.payload,
      }
      default:
      throw new Error();
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const photoIdSearcher = (imageArray, modalPhotoId) => {
    const imageObj = imageArray.find((imgObj) => imgObj.id === parseInt(modalPhotoId));
    return imageObj ? [{title: imageObj.title, caption: imageObj.caption}, {src: imageObj.src}, ...imageObj.otherPics] : 'Error, no photos with matching id in images data structure';
  };
  
  // if modal is not open, set photoid back to null
  useEffect(() => {
    if (!state.modal && state.photoId !== null) {
      dispatch({type: 'setPhotoId', payload: null})
    }
  }, [state.modal, state.photoId])

  useEffect(() => {
    const photoSearchResult = photoIdSearcher(newImageData, state.photoId);
    const modalPhotoData = photoSearchResult.slice(1)
    const photoTitleCaption = photoSearchResult[0]
    // const photoTitle = photoIdSearcher(newImageData, state.photoId)
    if (state.photoId) {

      dispatch({ type: 'setModalPhotoData', payload: modalPhotoData})
      setTimeout(() => {
        dispatch({type: 'setModalLoadingStatus', payload: false})
      },1000)
      dispatch({type: 'setModalPhotoCaption', payload: photoTitleCaption})
    }
  }, [state.photoId])
  return {state, dispatch}
}

export default useApplicationData;