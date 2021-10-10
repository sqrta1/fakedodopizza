import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import BonusActions from './BonusActions/BonusActions';
import Profile from './Profile/Profile';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/bonusactions">
            <BonusActions />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
