import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";

const ShoppingCart = () => (
  <ReactSvg className="svg-icon" src={`${SVG_ICONS_PATH}/cart.svg`} />
);

export default ShoppingCart;
