import GlobalStyles from "utils/global-styles";

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <main className="main-content">{children}</main>
  </>
);

export default Layout;
