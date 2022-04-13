

import "@fontsource/poppins";
import { useSelector } from "react-redux";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
const PokemonCardDetails = () => {
  return (
    <div className="flip-card">
      <div className="inner-card">
        <div className="front-card">
          <FrontSide />
        </div>
        <div className="back-card">
          <BackSide />
        </div>
      </div>
    </div>
  );
};

export default PokemonCardDetails;
