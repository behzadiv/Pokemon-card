import "@fontsource/poppins";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
const PokemonCardDetails = () => {
    const toFlipCart=()=>{
        document.querySelector(".flip-card").classList.toggle("clicked")
    }
  return (
    <div className="flip-card" >
      <div className="inner-card" onClick={()=>toFlipCart()}>
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
