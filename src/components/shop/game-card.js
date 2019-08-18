import PropTypes from "prop-types";
import styled from "styled-components";
const StyledGameCard = styled.div`
  width: 280px;
  height: 240px;
  margin: 0 15px;
  border-radius: 4px;
  border: 1px solid skyblue;

  .card__img-container {
    width: 200px;
    height: 180px;
  }

  .card__img {
    width: 100%;
    height: 100%;
    filter: invert(1);
  }
`;

const GameCard = ({ id }) => (
  <StyledGameCard>
    <figure className="card__img-container">
      <img className="card__img" src="/icons/cloudsync.gif" />
    </figure>
  </StyledGameCard>
);

export default GameCard;
