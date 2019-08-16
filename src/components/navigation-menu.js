import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavigationMenu = styled.nav`
  margin: 0;
  padding: 0;

  .navigation-list {
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    justify-content: center;
  }

  .navigation-item {
    margin: 0 24px;
    background-color: ;
  }

  .navigation-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--primary-accent);
  }

  .navigation-link:hover {
    text-decoration: underline;
  }

  .navigation-link:visited {
    color: var(--primary-accent);
  }

  .navigation-link-icon-container {
    width: 48px;
    height: 48px;
  }

  .navigation-link-icon {
    width: 100%;
    height: 100%;
    filter: invert(1);
  }
`;

const NavigationMenu = () => (
  <StyledNavigationMenu>
    <ul className="navigation-list">
      <li className="navigation-item">
        <Link to="/enemies" className="navigation-link">
          <h3>Enemies</h3>
          <figure className="navigation-link-icon-container">
            <img className="navigation-link-icon" src="/icons/enemies.svg" />
          </figure>
        </Link>
      </li>
      <li className="navigation-item">
        <Link to="/weapons" className="navigation-link">
          <h3>Weapons</h3>
          <figure className="navigation-link-icon-container">
            <img className="navigation-link-icon" src="/icons/weapons.svg" />
          </figure>
        </Link>
      </li>
    </ul>
  </StyledNavigationMenu>
);

export default NavigationMenu;
