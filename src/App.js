import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import Details from './pages/Details';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
