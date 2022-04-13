import { useSelector } from "react-redux";
import { startWithUpperCase } from "../utils/startWithUpperCase";


const FrontSide = () => {
  const { data } = useSelector((state) => state.pokemonData);
  const { id, name, sprites, types } = data;
  let imgSrc = "";
  let changedName = "";
  let firstBtn = "";
  let secondBtn = "hidden";
  if (sprites && types.length) {
      changedName=startWithUpperCase(name)
    // myName = name.split("")[0].toUpperCase() + name.slice("1"); //chenge first letter to upperCase
    imgSrc = sprites.other["official-artwork"].front_default;
    firstBtn = types[0].type.name;
    if (types.length === 2) secondBtn = types[1].type.name; //define when we have two types then cart have two btn
  }
  return (
    <>
      <p className="id">#{id}</p>
      <h2 className="name">{changedName}</h2>
      <div className="front-body">
        <img src={imgSrc} alt={`${name}image`} className="image" />
        <div className="buttons-container">
          <button className={`mybtn ${firstBtn}`}>{firstBtn}</button>
          <button className={`mybtn ${secondBtn}`}>{secondBtn}</button>
        </div>
      </div>
    </>
  );
};

export default FrontSide;
