import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const PriceTag = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/tag.svg`}
  />
);

export default PriceTag;
