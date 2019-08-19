import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const Heart = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/heart.svg`}
  />
);

export default Heart;
