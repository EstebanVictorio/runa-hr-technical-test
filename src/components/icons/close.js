import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const Close = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/clear.svg`}
  />
);

export default Close;
