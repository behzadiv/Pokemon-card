import {
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from "./pokemonDataTypes";

const initialState = {
  data: {},
  loading: false,
  error: "",
};

const pokemonDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return { ...state, loading: true };
      break;
    case FETCH_POKEMON_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_POKEMON_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
      break;
  }
};

export default pokemonDataReducer;

