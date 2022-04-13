import "@fontsource/poppins";
const PokemonCardDetails = (props) => {
  console.log(props);
  const { id, name, sprites, types } = props.data;
  //const imgSrc = sprites.other[official-artwork].front_default
  let imgSrc = "";
  let myName = ""
  let firstBtn ="";
  let secondBtn = "hidden"
  if (sprites && types.length) {
    myName= name.split("")[0].toUpperCase() + name.slice("1")//chenge first letter to upperCase
    imgSrc = sprites.other["official-artwork"].front_default;
    firstBtn = types[0].type.name;
    if(types.length===2)secondBtn = types[1].type.name;//define when we have two types then cart have two btn
  }
  return (
    <div className="flip-card">
      <div className="inner-card">
        <div className="front-card">
          <p className="id">#{id}</p>
          <h2 className="name">{myName}</h2>
          <img src={imgSrc} alt={`${name}image`} className="image" />
          <div className="buttons-container">
            <button className={`btn ${firstBtn}`}>{firstBtn}</button>
            <button className={`btn ${secondBtn}`}>{secondBtn}</button>
          </div>
        </div>
        <div className="back-card">
          <h2>back</h2>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardDetails;
