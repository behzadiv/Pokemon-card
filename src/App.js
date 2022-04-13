
import { Provider } from 'react-redux';
import './App.css';
import PokemonCardApp from './component/PokemonCardApp';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PokemonCardApp/>
    </Provider>
  );
}

export default App;
