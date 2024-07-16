import { useEffect, useReducer } from "react";

const initialState = {
  modal: false,
  photoId: null,
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
      default:
      throw new Error();
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // if modal is not open, set photoid back to null
  useEffect(() => {
    if (!state.modal && state.photoId !== null) {
      dispatch({type: 'setPhotoId', payload: null})
    }
  }, [state.modal, state.photoId])
  return {state, dispatch}
}

export default useApplicationData;