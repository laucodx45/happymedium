import { useReducer } from "react";

const initialState = {
  modal: false,
  photoId: null,
}

export function reducer(state, action) {
  switch(action.type) {
    case 'toggleModal' :
      return {
        ...state,
        modal: !state.modal
      }
      default:
      throw new Error();
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {state, dispatch}
}

export default useApplicationData;