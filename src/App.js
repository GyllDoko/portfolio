import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store, persistor } from './store/Store';
import Details from './pages/Details';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
