import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const Purchase = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/bag.svg`}
  />
);

export default Purchase;
