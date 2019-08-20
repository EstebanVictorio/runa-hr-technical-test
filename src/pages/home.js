import { useEffect } from "react";
import { connect } from "react-redux";
import { modalOpen } from "ducks/modal";
import Search from "components/shop/search";
import GameList from "components/shop/game-list";
import { fetchSearch, cleanSearchResults } from "ducks/search-results";
import { fetchFeaturedGames, fetchLatestReleases } from "ducks/overview";

const Home = ({
  results,
  searching,
  fetchLatest,
  cleanSearch,
  modalBuyOpen,
  fetchFeatured,
  featuredGames,
  latestReleases,
  fetchNewSearch
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
      <Search
        results={results}
        modalBuyOpen={modalBuyOpen}
        searching={searching}
        cleanSearch={cleanSearch}
        fetchNewSearch={fetchNewSearch}
      />
      <GameList title="Featured Games" list={featuredGames} />
      <GameList title="Latest Releases" list={latestReleases} />
    </section>
  );
};

const mapStateToProps = ({ overview, searchResults }) => ({
  results: searchResults.results,
  searching: searchResults.searching,
  featuredGames: overview.featuredGamesList,
  latestReleases: overview.latestReleasesList
});

const mapDispatchToProps = {
  modalBuyOpen: modalOpen,
  fetchNewSearch: fetchSearch,
  cleanSearch: cleanSearchResults,
  fetchLatest: fetchLatestReleases,
  fetchFeatured: fetchFeaturedGames
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
