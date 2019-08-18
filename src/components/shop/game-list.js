import PropTypes from "prop-types";
import styled from "styled-components";
import GameCard from "components/shop/game-card";

const StyledGameListContainer = styled.div`
  padding: 24px;
`;

const StyledGameList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
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
