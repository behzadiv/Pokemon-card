import { combineReducers } from "redux";
import pokemonDataReducer from "./pokemonData/pokemonDataReducer";

const rootReducer = combineReducers({
    pokemonData : pokemonDataReducer
})
export default rootReducer;