import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonData } from "../redux/pokemonData/pokemonDataAction";
import NotFound from "./NotFound";
import PokemonCardDetails from "./PokemonCardDetails";

const PokemonCardApp = () => {
  const param = useParams()//get params 
  console.log(param);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonData(param));
  }, []);
  const { data, loading, error } = useSelector((state) => state.pokemonData);
//console.log(error,data,loading);
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        errorHandling(error)
        ) : (
        <PokemonCardDetails  />
      )}
    </div>
  );
};

export default PokemonCardApp;

const errorHandling=(error)=>{
  console.log(error.message);
  switch (error.message) {
    case "Request failed with status code 404":
      return <NotFound/>
      break;
    case "Network Error":
      return <h2>Network Error</h2>
    default:
      break;
  }
}