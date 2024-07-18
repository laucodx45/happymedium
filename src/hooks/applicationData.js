import { useEffect, useReducer } from "react";
import { newImageData } from "../lib/images";

const initialState = {
  modal: false,
  photoId: null,
  modalPhotoData: null,
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
      default:
      throw new Error();
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const photoIdSearcher = (imageArray, modalPhotoId) => {
    const imageObj = imageArray.find((imgObj) => imgObj.id === parseInt(modalPhotoId));
    return imageObj ? [imageObj.src, ...imageObj.otherPics] : 'Error, no photos with matching id in images data structure';
  };
  


  
  // if modal is not open, set photoid back to null
  useEffect(() => {
    if (!state.modal && state.photoId !== null) {
      dispatch({type: 'setPhotoId', payload: null})
    }
  }, [state.modal, state.photoId])

  useEffect(() => {
    if (state.photoId) {
      dispatch({ type: 'setModalPhotoData', payload: photoIdSearcher(newImageData, state.photoId)})
    }
  }, [state.photoId])
  return {state, dispatch}
}

export default useApplicationData;