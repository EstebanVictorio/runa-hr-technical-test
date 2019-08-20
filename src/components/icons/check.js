import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const Check = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/check.svg`}
  />
);

export default Check;
