import { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import CreditCard from "components/icons/credit-card";

const StyledSearchResult = styled.div`
  width: 100%;
  flex-grow: 1;
  display: grid;
  align-items: center;
  box-sizing: border-box;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: auto 1fr 1fr;

  grid-template-areas:
    "game-image title actions"
    "game-image empty purchase-action";

  .searchresult__img-container {
    margin: 0;
    width: 80px;
    height: 60px;
    border: none;
    display: flex;
    padding: 0 24px;
    border-radius: 5px;
    align-items: center;
    grid-area: game-image;
    justify-content: center;
  }

  .searchresult__img {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
  }

  .searchresult__img-loading {
    width: 100%;
    height: 100%;
    filter: invert(1);
  }

  .searchresult__title {
    margin: 0;
    font-size: 14px;
    grid-area: title;
    font-weight: 400;
  }

  .searchresult__form {
    display: flex;
    padding: 2px 10px;
    grid-area: actions;
    box-sizing: border-box;
    justify-content: flex-end;
  }

  .searchresult__purchase-form {
    display: flex;
    grid-area: purchase-action;
    justify-content: space-between;
  }

  .searchresult__action-label {
    width: 48px;
    height: 48px;
    margin: 0 5px;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    border-radius: 100%;
    justify-content: center;
  }

  .searchresult__action-label:hover {
    filter: invert(1);
    background-color: red;
  }

  .searchresult__action {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 100%;
    border: 1px solid gray;
    cursor: pointer;
    background-color: transparent;
  }

  .searchresult__action-label--squared {
    width: 100%;
    border-radius: 5px;
  }

  .searchresult__action--squared {
    width: 100%;
    border-radius: 5px;
  }

  .searchresult__action-content {
    width: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-evenly;
  }

  .searchresult__action-icon-container {
    margin: 0;
    width: 20px;
    height: 20px;
  }

  .searchresult__action-icon {
    width: 100%;
    height: 100%;
    filter: invert(1);
  }

  .searchresult__price {
    font-size: 16px;
    color: white;
  }

  .searchresult__divider {
    width: 95%;
    border: 0.5px solid skyblue;
  }
`;

const StyledSeparator = styled.hr`
  border: 0.5px solid var(--dark);
  width: 98%;
`;

const SearchResult = ({ name, image, price, isLastResult, modalBuyOpen }) => {
  const handleBuySubmit = e => {
    e.preventDefault();
    modalBuyOpen();
  };

  return (
    <Fragment>
      <StyledSearchResult>
        <figure className="searchresult__img-container">
          <img className="searchresult__img" src={image} />
        </figure>
        <p className="searchresult__title">{name}</p>
        {/* <form className="searchresult__form">
          <label className="searchresult__action-label">
            <input
              type="button"
              className="searchresult__action"
              onClick={() => console.log("Clicked!")}
            />
            <div className="searchresult__action-content">
              <figure className="searchresult__action-icon-container">
                <img
                  className="searchresult__action-icon"
                  src="/icons/heart.svg"
                />
              </figure>
            </div>
          </label>
          <label className="searchresult__action-label">
            <input type="button" className="searchresult__action" />
            <div className="searchresult__action-content">
              <figure className="searchresult__action-icon-container">
                <img
                  className="searchresult__action-icon"
                  src="/icons/gift.svg"
                />
              </figure>
            </div>
          </label>
        </form> */}
        <form
          className="searchresult__purchase-form"
          onSubmit={handleBuySubmit}
        >
          <label className="searchresult__action-label searchresult__action-label--squared">
            <input
              value=""
              type="submit"
              className="searchresult__action searchresult__action--squared"
            />
            <div className="searchresult__action-content">
              <figure className="searchresult__action-icon-container">
                <img
                  className="searchresult__action-icon"
                  src="/icons/card.svg"
                />
              </figure>
              <span className="searchresult__price">59.99</span>
            </div>
          </label>
        </form>
      </StyledSearchResult>
      {isLastResult ? null : <StyledSeparator />}
    </Fragment>
  );
};

SearchResult.defaultProps = {
  name: "",
  image: "",
  price: 59.99
};

SearchResult.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number
};

export default SearchResult;
