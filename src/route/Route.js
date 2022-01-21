import { BrowserRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../screen/dashboard/Dashbord";
import Register from "../screen/register/Register";
import Login from "../screen/login/Login";
import Detail from "./../screen/dashboard/Detail";

function Root() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default Root;
