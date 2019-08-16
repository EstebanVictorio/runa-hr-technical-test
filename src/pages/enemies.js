import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEnemies } from "ducks/enemies";

const Enemies = ({ enemiesList, fetchHaloEnemies }) => {
  const loadEnemiesEffect = () => {
    fetchHaloEnemies();
  };
  useEffect(loadEnemiesEffect, []);
  return <div>Enemies page</div>;
};

const mapStateToProps = ({ enemies }) => ({
  enemiesList: enemies.list
});

const mapDispatchToProps = {
  fetchHaloEnemies: fetchEnemies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Enemies);
