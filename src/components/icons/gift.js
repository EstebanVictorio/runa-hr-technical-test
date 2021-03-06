import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const Gift = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/gift.svg`}
  />
);

export default Gift;
