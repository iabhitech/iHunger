import Main from "./components/MainComponent";
import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

export const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history} basename={process.env.REACT_APP_PUBLIC_URL}>
        <Main />
      </Router>
    </Provider>
  );
};

export default App;
