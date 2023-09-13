// visiteurReducer.js

// Action Types
const SET_FORM = 'SET_FORM';

// Initial State
const initialState = {
  date: '',
  libelle:'',
  surfaces: '',
  signatureChoisie:'',

};

// Reducer
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        date: action.payload.date,
        libelle: action.payload.libelle,
        surfaces: action.payload.surfaces,
        signatureChoisie: action.payload.signatureChoisie
      };
    default:
      return state;
  }
};

// Action Creators
export const setForm = (date, libelle, surfaces, signatureChoisie) => ({
  type: SET_FORM,
  payload: {date, libelle, surfaces, signatureChoisie}
});

export default formReducer;
