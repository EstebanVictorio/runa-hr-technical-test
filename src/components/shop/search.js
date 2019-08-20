import PropTypes from "prop-types";
import styled from "styled-components";
import { DEBOUNCE_TIME } from "utils/constants";
import { useState, useEffect, Fragment } from "react";
import SearchResults from "components/shop/search-results";

const StyledSearchInputContainer = styled.label`
  top: 120px;
  right: 0px;
  display: flex;
  margin: 2px 10px;
  position: absolute;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
`;

const StyledSearchInput = styled.input`
  height: 48px;
  width: 400px;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 0 40px;
  border-radius: 80px;
  box-sizing: border-box;
  transition: box-shadow 0.2s;

  &:focus {
    border: 2px solid cyan;
    box-shadow: 2px 2px 10px 1px black;
  }
`;

const StyledSearchInputClearButton = styled.input`
  right: 48px;
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  background-size: 22px 22px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  transition: background-color 0.2s;
  background-image: url("/icons/clear.svg");
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};

  &:hover {
    background-color: cyan;
  }
`;

const SearchInput = ({
  results,
  searching,
  cleanSearch,
  modalBuyOpen,
  fetchNewSearch
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleClearSearchValueClick = () => setSearchValue("");

  const handleSetSearchValueChange = event => {
    setSearchValue(event.target.value);
    cleanSearch();
  };

  const debouncedSearch = () => {
    if (searchValue.length > 0) {
      fetchNewSearch(searchValue);
    }
  };

  const debounceSearchInputEffect = () => {
    const lastTimeout = setTimeout(debouncedSearch, DEBOUNCE_TIME);
    return () => {
      clearTimeout(lastTimeout);
    };
  };

  useEffect(debounceSearchInputEffect, [searchValue]);

  return (
    <Fragment>
      <StyledSearchInputContainer>
        <StyledSearchInput
          value={searchValue}
          onChange={handleSetSearchValueChange}
        />
        <StyledSearchInputClearButton
          type="button"
          visible={searchValue.length > 0}
          onClick={handleClearSearchValueClick}
        />
        <SearchResults
          results={results}
          searching={searching}
          modalBuyOpen={modalBuyOpen}
          visible={searchValue.length > 0}
        />
      </StyledSearchInputContainer>
    </Fragment>
  );
};

export default SearchInput;
