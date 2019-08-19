import ReactSvg from "react-svg";
import { SVG_ICONS_PATH } from "utils/constants";
const Search = ({ classes }) => (
  <ReactSvg
    className={`svg-icon ${classes}`}
    src={`${SVG_ICONS_PATH}/card.svg`}
  />
);

export default Search;
