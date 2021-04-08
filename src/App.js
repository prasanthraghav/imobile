import { Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.scss";
import ListView from "./components/ListView";
import DetailView from "./components/DetailView";
import NotFound from "./components/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="app">
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route path="/patient/:id" component={DetailView} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </QueryClientProvider>
  );
}

export default App;
