import { useEffect, useReducer } from "react";
import { newImageData } from "../lib/images";

const initialState = {
  modal: false,
  photoId: null,
  modalPhotoData: [],
  modalPhotoCaption: null
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
        modalPhotoCaption: action.payload
      }
      default:
      throw new Error();
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const photoIdSearcher = (imageArray, modalPhotoId) => {
    const imageObj = imageArray.find((imgObj) => imgObj.id === parseInt(modalPhotoId));
    return imageObj ? [imageObj.caption, {src: imageObj.src}, ...imageObj.otherPics] : 'Error, no photos with matching id in images data structure';
  };
  


  
  // if modal is not open, set photoid back to null
  useEffect(() => {
    if (!state.modal && state.photoId !== null) {
      dispatch({type: 'setPhotoId', payload: null})
    }
  }, [state.modal, state.photoId])

  useEffect(() => {
    const modalPhotoData = photoIdSearcher(newImageData, state.photoId).slice(1)
    const photoCaption = photoIdSearcher(newImageData, state.photoId)[0]
    if (state.photoId) {
      dispatch({ type: 'setModalPhotoData', payload: modalPhotoData})
      dispatch({type: 'setModalPhotoCaption', payload: photoCaption})
    }
  }, [state.photoId])
  return {state, dispatch}
}

export default useApplicationData;