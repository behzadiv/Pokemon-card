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
    payload:error
  };
};

export const fetchPokemonData = () => {
  return function (dispatch) {
      dispatch(fetchPokemonRequest)
    axios
      .get("https://pokeapi.co/api/v2/pokemon/100")
      .then((res) => dispatch(fetchPokemonSuccess(res.data)))
      .catch((err) => dispatch(fetchPokemonFailure(err)));
  };
};
