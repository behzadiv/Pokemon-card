import { ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Progress } from "antd";
import "@fontsource/poppins";
import { useSelector } from "react-redux";
import FrontSide from "./FrontSide";
const PokemonCardDetails = () => {
  return (
    <div className="flip-card">
      <div className="inner-card">
        <div className="front-card">
          <FrontSide />
        </div>
        <div className="back-card"></div>
      </div>
    </div>
  );
};

export default PokemonCardDetails;
