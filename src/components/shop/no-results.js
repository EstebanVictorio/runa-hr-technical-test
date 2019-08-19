import styled from "styled-components";
import { useState, useEffect } from "react";
import Magnifier from "components/icons/magnifier";

const StyledNoResults = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .noresults__heading {
    text-transform: uppercase;
    color: gray;
  }

  .noresults__heading.hidden,
  .noresults__icon.hidden {
    display: none;
  }

  .noresults__icon path {
    fill: gray;
  }
`;

const NoResults = ({ show }) => {
  const [headingShowClassName, setHeadingShowClassName] = useState("");
  const [magnifierShowClassName, setMagnifierShowClassName] = useState("");

  const showEffect = () => {
    setHeadingShowClassName(show ? "" : "hidden");
    setMagnifierShowClassName(show ? "" : "hidden");
  };

  useEffect(showEffect, [show]);

  return (
    <StyledNoResults>
      <h4 className={`noresults__heading ${headingShowClassName}`}>
        no results found so far
      </h4>
      <Magnifier classes={`noresults__icon ${magnifierShowClassName}`} />
    </StyledNoResults>
  );
};

export default NoResults;
