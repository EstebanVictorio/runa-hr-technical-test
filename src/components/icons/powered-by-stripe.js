import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const PoweredByStripe = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/powered_by_stripe.svg`}
  />
);

export default PoweredByStripe;
