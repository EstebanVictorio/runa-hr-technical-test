const MODAL_OPEN = "MODAL_OPEN";
const MODAL_CLOSE = "MODAL_CLOSE";

const initialState = {
  open: false
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        open: true
      };
    case MODAL_CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

const modalOpen = () => ({
  type: MODAL_OPEN
});

const modalClose = () => ({
  type: MODAL_CLOSE
});

export { MODAL_OPEN, MODAL_CLOSE, modal, modalOpen, modalClose };
