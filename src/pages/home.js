import { useEffect } from "react";
import { connect } from "react-redux";
import GameList from "components/shop/game-list";
import SearchInput from "components/shop/search-input";
import { fetchFeaturedGames, fetchLatestReleases } from "ducks/overview";

const Home = ({
  featuredGames,
  latestReleases,
  fetchFeatured,
  fetchLatest
}) => {
  const loadFeaturesGamesEffect = () => {
    fetchFeatured();
  };
  const loadLatestReleasesEffect = () => {
    fetchLatest();
  };

  useEffect(loadFeaturesGamesEffect, []);
  useEffect(loadLatestReleasesEffect, []);

  return (
    <section className="content-section">
      <SearchInput />
      <GameList title="Featured Games" list={featuredGames} />
      <GameList title="Latest Releases" list={latestReleases} />
    </section>
  );
};

const mapStateToProps = ({ overview }) => ({
  featuredGames: overview.featuredGamesList,
  latestReleases: overview.latestReleasesList
});

const mapDispatchToProps = {
  fetchFeatured: fetchFeaturedGames,
  fetchLatest: fetchLatestReleases
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
