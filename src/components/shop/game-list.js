import PropTypes from "prop-types";
import styled from "styled-components";
import GameCard from "components/shop/game-card";

const StyledGameListContainer = styled.div`
  padding: 24px;
  box-sizing: border-box;
`;

const StyledGameList = styled.ul`
  margin: 0;
  width: 100%;
  display: flex;
  padding: 10px 0;
  overflow-x: auto;
  list-style-type: none;
`;

const GameList = ({ list, title }) => (
  <StyledGameListContainer>
    <h2 className="gamelist__title">{title}</h2>
    <StyledGameList>
      {list.map(game => (
        <li>
          <GameCard />
        </li>
      ))}
    </StyledGameList>
  </StyledGameListContainer>
);

GameList.defaultProps = {
  list: []
};

export default GameList;
