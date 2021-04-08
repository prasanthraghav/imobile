import { Switch, Route } from "react-router-dom";

import "./App.scss";
import ListView from "./components/ListView";
import DetailView from "./components/DetailView";

function App() {
  return (
    <main className="app">
      <Switch>
        <Route exact path="/" component={ListView} />
        <Route path="/patient/:id" component={DetailView} />
      </Switch>
    </main>
  );
}

export default App;
