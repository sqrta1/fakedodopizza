import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './Main/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
