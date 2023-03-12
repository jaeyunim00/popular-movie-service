import { BrowserRouter, Route, Link, Router, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./css/main.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movie/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
