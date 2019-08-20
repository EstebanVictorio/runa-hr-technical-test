import { Fragment } from "react";
import GlobalStyles from "utils/global-styles";
import NavigationBar from "components/navigation-bar";
import PurchaseConfirmModal from "components/shop/purchase-confirm-modal";
// import DashboardPanels from "components/dashboard-panels";
const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <NavigationBar />
    <PurchaseConfirmModal />
    <main className="main-content">{children}</main>
  </Fragment>
);

export default Layout;
