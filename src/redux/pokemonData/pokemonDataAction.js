import axios from "axios";
import {
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from "./pokemonDataTypes";

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};
export const fetchPokemonSuccess = (data) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: data,
  };
};
export const fetchPokemonFailure = (error) => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error,
  };
};

export const fetchPokemonData = (param) => {
  let myId = "";
  if (
    param.id ? (myId = param.id) : (myId = Math.ceil(Math.random() * (898 - 1)))
  )
    return function (dispatch) {
      dispatch(fetchPokemonRequest);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${myId}`)
        .then((res) => dispatch(fetchPokemonSuccess(res.data)))
        .catch((err) => dispatch(fetchPokemonFailure(err)));
    };
};
