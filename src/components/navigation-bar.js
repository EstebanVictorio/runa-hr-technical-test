import styled from "styled-components";
import { Link } from "react-router-dom";
import Gift from "components/icons/gift";
import Heart from "components/icons/heart";
import Purchase from "components/icons/purchase";
import PoweredByStripe from "components/icons/powered-by-stripe";
import ShoppingCart from "components/icons/shopping-cart";

const StyledNavigationBar = styled.nav`
  top: 0;
  width: 100vw;
  display: flex;
  height: 100px;
  position: sticky;
  align-items: center;
  box-sizing: border-box;
  background-color: darkslategray;
  box-shadow: 2px 2px 20px 5px black;

  .navbar__brand-heading {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px;
  }

  .navbar__list {
    right: 0;
    margin: 0;
    height: 100%;
    display: flex;
    padding: 0 24px;
    position: absolute;
    align-items: center;
    list-style-type: none;
    justify-content: space-between;
  }

  .navbar__list-item {
    margin: 0 10px;
  }

  .navbar__link {
    color: white;
  }

  .stripe-icon {
    display: flex;
    align-items: center;
  }
`;

const NavigationBar = () => (
  <StyledNavigationBar className="navbar">
    <Link className="navbar__link" to="/">
      <h1 className="navbar__brand-heading">RSC</h1>
    </Link>
    <PoweredByStripe classes="stripe-icon" />
    <ul className="navbar__list">
      {/* <li className="navbar__list-item">
        <Link className="navbar__link" to="/">
          <ShoppingCart />
        </Link>
      </li> */}
      {/* <li className="navbar__list-item">
        <Link className="navbar__link" to="/">
          <Gift />
        </Link>
      </li> */}
      <li className="navbar__list-item">
        <Link className="navbar__link" to="/">
          <Purchase />
        </Link>
      </li>
      {/* <li className="navbar__list-item">
        <Link className="navbar__link" to="/">
          <Heart />
        </Link>
      </li> */}
    </ul>
  </StyledNavigationBar>
);

export default NavigationBar;
