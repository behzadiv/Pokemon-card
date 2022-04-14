import { Provider } from "react-redux";
import "./App.css";
import PokemonCardApp from "./component/PokemonCardApp";
import store from "./redux/store";
import "@fontsource/poppins";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/:id" element={<PokemonCardApp />} />
          <Route path="/" element={<PokemonCardApp />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
