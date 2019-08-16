import Routes from "routes";
import Layout from "components/layout";
import { BrowserRouter as Router } from "react-router-dom";

const appContainer = document.querySelector("#root");
const App = () => (
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>
);
ReactDOM.render(<App />, appContainer);
