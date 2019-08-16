import GlobalStyles from "utils/global-styles";
import DashboardPanels from "components/dashboard-panels";
const Layout = ({ children }) => (
  <main className="main-content">
    <GlobalStyles />
    <h1 className="welcome-title">Welcome to Halo Museum!</h1>
    <h2 className="call-to-action">Check the pages below to browse:</h2>
    {children}
    <DashboardPanels />
  </main>
);

export default Layout;
