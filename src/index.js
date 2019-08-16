import Routes from "routes";
import Layout from "components/layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
const appContainer = document.querySelector("#root");
const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </Provider>
);
ReactDOM.render(<App />, appContainer);
