import { useEffect } from "react";
import { fetchWeapons } from "ducks/weapons";
import { connect } from "react-redux";

const Weapons = ({ fetchHaloWeapons, weaponsList }) => {
  const loadWeaponsEffect = () => {
    fetchHaloWeapons();
  };

  useEffect(loadWeaponsEffect, []);

  return <div>Weapons page</div>;
};

const mapStateToProps = ({ weapons }) => ({
  weaponsList: weapons.list
});

const mapDispatchToProps = {
  fetchHaloWeapons: fetchWeapons
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapons);
