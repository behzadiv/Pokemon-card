import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonData } from "../redux/pokemonData/pokemonDataAction";
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
        <h2>{error.message}</h2>
      ) : (
        <PokemonCardDetails  />
      )}
    </div>
  );
};

export default PokemonCardApp;
