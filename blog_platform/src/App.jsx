import Topbar from "./components/NavBar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">{currentUser ? <Home /> : <Register />}</Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
