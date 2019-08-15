import Layout from "components/layout";

const appContainer = document.querySelector("#root");
const App = () => (
  <Layout>
    <div>Hello world from React!</div>
  </Layout>
);
ReactDOM.render(<App />, appContainer);
