import { useEffect } from "react";
import { connect } from "react-redux";
import { modalOpen } from "ducks/modal";
import Search from "components/shop/search";
import GameList from "components/shop/game-list";
import { fetchSearch, cleanSearchResults } from "ducks/search-results";
import { fetchFeaturedGames, fetchLatestReleases } from "ducks/overview";

const Home = ({
  purchasesList,
  results,
  searching,
  gameToBuy,
  fetchLatest,
  cleanSearch,
  modalBuyOpen,
  fetchFeatured,
  featuredGames,
  latestReleases,
  fetchNewSearch
}) => {
  console.log("Purchased games:");
  console.log(purchasesList);
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
        searching={searching}
        cleanSearch={cleanSearch}
        modalBuyOpen={modalBuyOpen}
        fetchNewSearch={fetchNewSearch}
      />
      <GameList title="Featured Games" list={featuredGames} />
      <GameList title="Latest Releases" list={latestReleases} />
    </section>
  );
};

const mapStateToProps = ({ overview, searchResults, purchases }) => ({
  gameToBuy: purchases.gameToBuy,
  results: searchResults.results,
  purchasesList: purchases.list,
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
