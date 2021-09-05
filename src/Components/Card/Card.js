import data from "../data/colleges.json";

import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import Promote from "./Promote";

const Card = () => {
  console.log(data.colleges[0].college_name);
  return (
    <div>
      <Promote />
      <div
        style={{
          position: "relative",
          top: "0.5rem",
          left: "37rem",
          color: "#ffffff",
          fontSize: "0.8375rem",
          fontWeight: "500",
          borderShadow:''
        }}
      >
        Promote
      </div>
      <div
        style={{
          width: "99.7%",
          height: "54vh",
          borderRadius: "6px",
          border: "0.5px solid grey",
        }}
      >
        <CardTop />
        <CardBottom />
      </div>
    </div>
  );
};

export default Card;
