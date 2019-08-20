import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const AddToCart = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/cart-plus.svg`}
  />
);

export default AddToCart;
