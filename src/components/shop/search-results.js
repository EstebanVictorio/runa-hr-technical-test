import styled from "styled-components";
import Searching from "components/shop/searching";
import NoResults from "components/shop/no-results";
import SearchResult from "components/shop/search-result";

const StyledSearchResults = styled.div`
  top: 55px;
  z-index: 4;
  right: 58px;
  width: 360px;
  display: flex;
  overflow-y: auto;
  position: absolute;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: darkslategrey;
  padding: ${({ visible }) => (visible ? "10px" : "0")};
  height: ${({ visible }) => (visible ? "656px" : "0")};
  box-shadow: ${({ visible }) => (visible ? "8px 8px 12px 4px black" : "none")};
`;

const SearchResults = ({ visible, results, searching, modalBuyOpen }) => {
  return (
    <StyledSearchResults visible={visible} className="searchresults">
      {results.map((result, index) => (
        <SearchResult
          key={`searchresult-${index}`}
          name={result.name}
          modalBuyOpen={modalBuyOpen}
          image={result.background_image}
          isLastResult={index === results.length - 1}
        />
      ))}
      <Searching show={searching} />
      <NoResults show={!searching && results.length === 0} />
    </StyledSearchResults>
  );
};

export default SearchResults;
