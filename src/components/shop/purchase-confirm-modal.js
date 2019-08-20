import { connect } from "react-redux";
import styled from "styled-components";
import { modalClose } from "ducks/modal";
import Loader from "react-loader-spinner";
import Close from "components/icons/close";
import Check from "components/icons/check";
import { useState, useEffect } from "react";
import { startPurchase } from "ducks/purchases";
import CreditCard from "components/icons/credit-card";

const StyledOverlay = styled.div`
  top: 100px;
  z-index: 5;
  width: 100vw;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  background-color: rgba(32, 35, 42, 0.5);

  &.show {
    display: flex;
  }

  &.hidden {
    display: none;
  }
`;

const StyledPurchaseConfirmModal = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  border-radius: 2px;
  position: absolute;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: darkslategray;
  box-shadow: 5px 5px 15px 5px black;

  .modal__title {
    text-align: center;
  }

  .modal__game-img-container {
    width: 200px;
    height: 180px;
    margin: 0;
    padding: 0;
  }

  .modal__game-img {
    width: 100%;
    height: 100%;
  }

  .modal__game-img--filtered {
    filter: invert(1);
  }

  .modal__close-button {
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
    margin: 24px;
    border: none;
    outline: none;
    cursor: pointer;
    filter: invert(1);
    position: absolute;
    background-size: 48px 48px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-image: url("/icons/clear.svg");
  }

  .modal__form {
    width: 100%;
    display: flex;
    padding: 24px 0;
    position: relative;
    justify-content: center;
  }

  .modal__action-label {
    height: 48px;
    width: 120px;
    margin: 0 5px;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
  }

  .modal__action-label:hover {
    background-color: cyan;
  }

  .modal__action-label--loading,
  .modal__action-label--loading:hover {
    opacity: 0.5;
    filter: invert(0);
    background-color: transparent;
  }

  .modal__action-label:hover svg,
  .modal__action-label:hover .modal__action-text {
    filter: invert(1);
  }

  .modal__action-label--loading:hover svg,
  .modal__action-label--loading:hover .modal__action-text {
    filter: invert(0);
  }

  .modal__action {
    width: 100%;
    height: 100%;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    position: absolute;
    border: 1px solid gray;
    background-color: transparent;
  }

  .modal__action-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .modal__action-icon--hidden {
    display: none;
  }

  .modal__action-icon svg {
    width: 20px;
    height: 20px;
  }

  .modal__action-text {
    color: white;
    margin: 0 5px;
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;
  }
`;

const PurchaseConfirmModal = ({
  open,
  gameToBuy,
  errorInfo,
  purchasing,
  successful,
  gameBought,
  modalBuyClose,
  startGamePurchase
}) => {
  const { id, name, img } = gameToBuy;

  const [successIconClassName, setSuccessIconClassName] = useState(
    "modal__action-icon--hidden"
  );

  const [failureIconClassName, setFailureIconClassName] = useState(
    "modal__action-icon--hidden"
  );

  const [labelOpacityClassName, setLabelOpacityClassName] = useState(
    "modal__action-label"
  );

  const [buyIconClassName, setBuyIconClassName] = useState(
    purchasing && !gameBought && !errorInfo
      ? "modal__action-icon--hidden"
      : "modal__action-icon"
  );
  const [loaderClassName, setLoaderClassName] = useState(
    "modal__action-icon--hidden"
  );

  const [showModalClassName, setShowModalClassName] = useState(
    open ? "show" : "hidden"
  );

  const [imgFilteredClassName, setImgFilteredClassName] = useState(
    "modal__game-img modal__game-img--filtered"
  );

  const handleBuySubmit = event => {
    event.preventDefault();
    if (!purchasing) {
      startGamePurchase();
    }
  };

  const setLabelOpacityClassNameEffect = () => {
    setLabelOpacityClassName(
      purchasing
        ? "modal__action-label modal__action-label--loading"
        : "modal__action-label"
    );
  };

  const setBuyIconClassNameEffect = () => {
    setBuyIconClassName(
      purchasing || gameBought || errorInfo
        ? "modal__action-icon--hidden"
        : "modal__action-icon"
    );
  };

  const setLoaderClassNameEffect = () => {
    setLoaderClassName(
      purchasing ? "modal__action-icon" : "modal__action-icon--hidden"
    );
  };

  const setSuccessIconClassNameEffect = () => {
    setSuccessIconClassName(
      successful && !purchasing && gameBought
        ? "modal__action-icon"
        : "modal__action-icon--hidden"
    );
  };

  const setFailureIconClassNameEffect = () => {
    setSuccessIconClassName(
      !successful && !purchasing && errorInfo
        ? "modal__action-icon"
        : "modal__action-icon--hidden"
    );
  };

  const setShowModalClassNameEffect = () => {
    setShowModalClassName(open ? "show" : "hidden");
  };

  const setImgFilteredClassNameEffect = () => {
    setImgFilteredClassName(
      img ? "modal__game-img" : "modal__game-img modal__game-img--filtered"
    );
  };

  useEffect(setShowModalClassNameEffect, [open]);
  useEffect(setImgFilteredClassNameEffect, [img]);
  useEffect(setLoaderClassNameEffect, [purchasing]);
  useEffect(setBuyIconClassNameEffect, [purchasing, gameBought, errorInfo]);
  useEffect(setLabelOpacityClassNameEffect, [purchasing]);
  useEffect(setFailureIconClassNameEffect, [successful, purchasing, errorInfo]);
  useEffect(setSuccessIconClassNameEffect, [
    successful,
    purchasing,
    gameBought
  ]);
  console.log(`Success:${successful}`);
  console.log(`Purchasing:${purchasing}`);
  console.log(`GameBought:`);
  console.log(gameBought);
  console.log(`ErrorInfo:`);
  console.log(errorInfo);
  console.log("=========================");
  return (
    <StyledOverlay className={showModalClassName}>
      <StyledPurchaseConfirmModal>
        <input
          type="button"
          onClick={modalBuyClose}
          className="modal__close-button"
        />
        <h3 className="modal__title">Buy?</h3>
        <figure className="modal__game-img-container">
          <img
            className={imgFilteredClassName}
            src={img || "/icons/cloudsync.gif"}
          />
        </figure>
        <p className="modal__game-title">{name || "..."}</p>
        <form className="modal__form" onSubmit={handleBuySubmit}>
          <label className={labelOpacityClassName}>
            <Close classes={failureIconClassName} />
            <Check classes={successIconClassName} />
            <CreditCard classes={buyIconClassName} />
            <Loader
              width={20}
              type="Oval"
              height={20}
              color="cyan"
              className={loaderClassName}
            />
            <input value="" className="modal__action" type="submit" />
            <p className="modal__action-text">buy</p>
          </label>
        </form>
      </StyledPurchaseConfirmModal>
    </StyledOverlay>
  );
};

const mapStateToProps = ({ modal, purchases }) => ({
  open: modal.open,
  gameToBuy: purchases.gameToBuy,
  purchasing: purchases.purchasing,
  successful: purchases.successful,
  errorInfo: purchases.errorInfo,
  gameBought: purchases.gameBought
});

const mapDispatchToProps = {
  modalBuyClose: modalClose,
  startGamePurchase: startPurchase
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseConfirmModal);
