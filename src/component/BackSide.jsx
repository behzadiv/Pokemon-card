import { useSelector } from "react-redux";
import { Progress } from "antd";
import { startWithUpperCase } from "../utils/startWithUpperCase";
const BackSide = () => {
  const { data } = useSelector((state) => state.pokemonData);
  const { id, name, stats } = data;
  let changedName = "";
  if (stats) {
    changedName =startWithUpperCase(name)
  }
  return (
    <>
      <p className="id">#{id}</p>
      <h2 className="name">{changedName}</h2>
      <div className="back-body">
        <div className="abbility-container">
          {stats
            ? stats.map((stat) => {
                return <AbbilityProgressbar stat={stat} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default BackSide;

export const AbbilityProgressbar = (props) => {
  const { base_stat, stat } = props.stat;
  console.log(props);
  let color = "";
  switch (stat.name) {
    case "hp":
      color = "#CE416B";
      break;
    case "attack":
      color = "#FF9D55";
      break;
    case "defense":
      color = "#F4D23C";
      break;

    case "special-attack":
      color = "#8FA9DE";
      break;

    case "special-defense":
      color = "#63BC5A";
      break;
    case "speed":
      color = "#EC8FE6";
      break;

    default:
      color = "#111";
      break;
  }
  return (
    <div className="progressbar-container">
      <h2 className="progressbar-title" style={{ color }}>
        {stat.name}
      </h2>
      <div className="progressbar">
        <Progress percent={base_stat} showInfo={false} strokeColor={color} />
        <span className="progressbar-value" style={{ color }}>
          {base_stat}
        </span>
      </div>
    </div>
  );
};
