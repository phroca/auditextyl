// visiteurReducer.js

// Action Types
const SET_VISITEUR = 'SET_VISITEUR';

// Initial State
const initialState = {
  id: null,
  nom: '',
  prenom: '',
  avatar:'',
  animal:'',
  signature:''
};

// Reducer
const visiteurReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISITEUR:
      return {
        ...state,
        id: action.payload.id,
        nom: action.payload.nom,
        prenom: action.payload.prenom,
        avatar: action.payload.avatar,
        animal: action.payload.animal,
        signature: action.payload.signature
      };
    default:
      return state;
  }
};

// Action Creators
export const setVisiteur = (id, nom, prenom, avatar, animal, signature) => ({
  type: SET_VISITEUR,
  payload: { id, nom, prenom, avatar, animal, signature }
});

export default visiteurReducer;
