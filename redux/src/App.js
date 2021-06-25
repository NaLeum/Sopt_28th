import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginSuccess from "./components/LoginSuccess";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/success" component={LoginSuccess} />
      </Switch>
    </Router>
  );
}

export default App;
