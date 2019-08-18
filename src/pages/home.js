import { useEffect } from "react";
import { connect } from "react-redux";
import GameList from "components/shop/game-list";
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
      <GameList title="Featured Games" list={featuredGames} />
      <GameList title="Latest Releases" list={latestReleases} />
    </section>
  );
};

const mapStateToProps = ({ featuredGamesList, latestReleasesList }) => ({
  featuredGames: featuredGamesList,
  latestReleases: latestReleasesList
});

const mapDispatchToProps = {
  fetchFeatured: fetchFeaturedGames,
  fetchLatest: fetchLatestReleases
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
