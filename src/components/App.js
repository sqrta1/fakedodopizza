import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import BonusActions from "./BonusActions/BonusActions";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import "./App.css";
import "../media/fonts/dodo.woff2";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
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
  );
}

export default App;
