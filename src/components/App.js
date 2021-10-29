import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import BonusActions from "./BonusActions/BonusActions";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import "./App.css";
import "../media/fonts/dodo.woff2";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute/Privateroute";

function App() {
  const jwt = localStorage.getItem("jwt");
  const [isAuthorized, setAuthorized] = useState(!!jwt);
  return (
    <BrowserRouter>
      <Header isAuthorized={isAuthorized} setAuthorized={setAuthorized} />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/bonusactions">
          <BonusActions />
        </Route>
        <PrivateRoute
          isAuthorized={isAuthorized}
          path="/profile"
          setAuthorized={setAuthorized}
          component={Profile}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
