import styled from "styled-components";

const StyledSearchResults = styled.div`
  top: 74px;
  z-index: 4;
  right: 58px;
  width: 380px;
  height: 600px;
  display: flex;
  position: absolute;
  flex-direction: column;
  transition: opacity 0.5s;
  border-radius: 5px;
  background-color: darkslategrey;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const SearchResults = ({ visible }) => (
  <StyledSearchResults visible={visible} />
);

export default SearchResults;
