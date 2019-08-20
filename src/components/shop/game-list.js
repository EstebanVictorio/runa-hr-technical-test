import PropTypes from "prop-types";
import styled from "styled-components";
import GameCard from "components/shop/game-card";

const StyledGameListContainer = styled.div`
  margin: 24px;
  box-sizing: border-box;

  .gamelist__title {
    margin: 0;
    padding: 0;
  }
`;

const StyledGameList = styled.ul`
  margin: 0;
  width: 100%;
  display: flex;
  padding: 20px 0;
  overflow-x: auto;
  list-style-type: none;
`;

const GameList = ({ list, title }) => (
  <StyledGameListContainer>
    <h2 className="gamelist__title">{title}</h2>
    <StyledGameList>
      {list.map((game, index) => (
        <li key={`game-${game.id ? game.id : index}`}>
          <GameCard id={game.id} name={game.name} img={game.background_image} />
        </li>
      ))}
    </StyledGameList>
  </StyledGameListContainer>
);

GameList.defaultProps = {
  list: []
};

export default GameList;
