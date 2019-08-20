import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { modalOpen } from "ducks/modal";
import Gift from "components/icons/gift";
import Heart from "components/icons/heart";
import { useState, useEffect } from "react";
import { setGameToBuy } from "ducks/purchases";
import PriceTag from "components/icons/price-tag";
import CreditCard from "components/icons/credit-card";
import AddToCart from "components/icons/add-to-cart";

const StyledGameCard = styled.div`
  width: 280px;
  margin: 0 15px;
  border-radius: 4px;
  box-sizing: border-box;
  transition: transform 0.2s;
  border: 1px solid transparent;
  box-shadow: 4px 4px 12px 1px black;

  &:hover {
    transform: scale(1.05);
  }

  .card__img-container {
    margin: 0;
    width: 100%;
    display: flex;
    height: 180px;
    box-sizing: border-box;
    justify-content: center;
  }

  .card__img {
    width: 100%;
    height: 100%;
  }

  .card__img--normal {
    filter: invert(0);
  }

  .card__img--filtered {
    filter: invert(1);
  }

  .card__body {
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-areas:
      "title price"
      "actions actions";
    box-sizing: border-box;
    border-color: skyblue;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: darkslategray;
  }

  .card__title {
    margin: 0%;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    grid-area: title;
    overflow: hidden;
    box-sizing: border-box;
  }

  .card__price {
    width: 100%;
    padding: 10px;
    display: flex;
    grid-area: price;
    box-sizing: border-box;
    justify-content: flex-end;
  }

  .card__price-tag {
    margin: 0 0 0 4px;
    font-size: 18px;
  }

  .card__plain-icon-container {
    margin: 0;
    width: 20px;
    height: 20px;
    padding: 4px 0;
    position: relative;
    box-sizing: border-box;
  }

  .card__form {
    padding: 5px 8px;
    display: flex;
    grid-column: 1/-1;
    justify-content: flex-end;
  }

  .card__form-label {
    display: flex;
    margin: 0 5px;
    cursor: pointer;
    position: relative;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: background-color 0.2s;
  }

  .card__form-label:hover {
    background-color: cyan;
  }

  .card__form-label:hover > .card__plain-icon {
    filter: invert(1);
  }

  .card__form-action {
    width: 48px;
    height: 48px;
    outline: none;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid gray;
    background-color: transparent;
  }

  .card__form-label--disabled {
    opacity: 0.5;
  }

  .card__form-label--disabled:hover {
    background-color: transparent;
  }

  .card__plain-icon {
    width: 20px;
    height: 20px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
  }

  .card__plain-icon svg {
    width: 20px;
    height: 20px;
  }
`;

const GameCard = ({
  id,
  name,
  img,
  modalBuyOpen,
  purchasesList,
  prepareGameToBuy
}) => {
  const [capturedClick, setCapturedClick] = useState("");
  const [disabledClassName, setDisabledClassName] = useState(
    purchasesList.filter(purchase => purchase.id === id).length === 0
      ? "card__form-label"
      : "card__form-label card__form-label--disabled"
  );

  const [filteredImgClassName, setFilteredImgClassName] = useState(
    "card__img card__img--filtered"
  );

  const setFilteredImgClassNameEffect = () => {
    setFilteredImgClassName(
      img ? "card__img card__img--normal" : "card__img card__img--filtered"
    );
  };

  const setDisabledClassNameEffect = () => {
    setDisabledClassName(
      purchasesList.filter(purchase => purchase.id === id).length === 0
        ? "card__form-label"
        : "card__form-label card__form-label--disabled"
    );
  };

  const handleClickCapture = e => setCapturedClick(e.target.name);
  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      if (capturedClick === "buy") {
        prepareGameToBuy({ id, name, img });
        modalBuyOpen();
      }
    }
  };

  useEffect(setDisabledClassName, [purchasesList]);
  useEffect(setFilteredImgClassNameEffect, [img]);

  return (
    <StyledGameCard>
      <figure className="card__img-container">
        <img
          className={filteredImgClassName}
          src={img || "/icons/cloudsync.gif"}
        />
      </figure>
      <div className="card__body">
        <p className="card__title">{name}</p>
        <div className="card__price">
          <figure className="card__plain-icon-container">
            <PriceTag classes="card__plain-icon" />
          </figure>
          <p className="card__price-tag">{name ? 59.99 : "---"}</p>
        </div>
        <form className="card__form" onSubmit={handleSubmit}>
          {/* <label className="card__form-label">
            <input
              value=""
              type="submit"
              name="add-to-cart"
              className="card__form-action"
              onClickCapture={handleClickCapture}
            />
            <AddToCart classes="card__plain-icon" />
          </label> */}
          <label className="card__form-label">
            <input
              value=""
              type="submit"
              name="buy"
              className="card__form-action"
              onClickCapture={handleClickCapture}
            />
            <CreditCard classes="card__plain-icon" />
          </label>
          {/* <label className="card__form-label">
            <input
              value=""
              type="submit"
              name="wish"
              className="card__form-action"
              onClickCapture={handleClickCapture}
            />
            <Heart classes="card__plain-icon" />
          </label> */}
          {/* <label className="card__form-label">
            <input
              value=""
              name="gift"
              type="submit"
              className="card__form-action"
              onClickCapture={handleClickCapture}
            />
            <Gift classes="card__plain-icon" />
          </label> */}
        </form>
      </div>
    </StyledGameCard>
  );
};

const mapStateToProps = ({ purchases }) => ({
  purchasesList: purchases.list
});

const mapDispatchToProps = {
  modalBuyOpen: modalOpen,
  prepareGameToBuy: setGameToBuy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCard);
