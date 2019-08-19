import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useState, useEffect } from "react";

const StyledSearching = styled.figure`
  margin: 0;
  padding: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  &.show {
    display: flex;
  }

  &.hidden {
    display: none;
  }
`;

const Searching = ({ show }) => {
  const [showClassName, setShowClassName] = useState("hidden");

  const setShowClassNameEffect = () =>
    setShowClassName(show ? "show" : "hidden");

  useEffect(setShowClassNameEffect, [show]);

  return (
    <StyledSearching className={showClassName}>
      <Loader color="white" width={48} height={48} type="Oval" />
    </StyledSearching>
  );
};

export default Searching;
