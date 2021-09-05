import data from "../data/colleges.json";

import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import Promote from "./Promote";

const Card = (props) => {
  let name = props.data.college_name.split("-")[0];
  console.log("hello")
  return (
    <div>
      {props.data.promoted ? (
        <>
          <Promote />
          <div
            style={{
              position: "relative",
              top: "0.5rem",
              left: "37rem",
              color: "#ffffff",
              fontSize: "0.8375rem",
              fontWeight: "500",
              borderShadow: "",
            }}
          >
            Promote
          </div>{" "}
        </>
      ) : (
        <></>
      )}
      <div
        style={{
          width: "99.7%",
          height: "54vh",
          borderRadius: "6px",
          border: "0.5px solid grey",
        }}
      >
        <CardTop
          tags={props.data.tags}
          rank={props.data.ranking}
          remark={props.data.rating_remarks}
        />

        <CardBottom
          name={name}
          discount={props.data.discount}
          ratings={props.data.rating}
          location={props.data.nearest_place}
          famous={props.data.famous_nearest_places}
          ofees={props.data.original_fees}
          nfees={props.data.discounted_fees}
          semester={props.data.fees_cycle}
          amenties={props.data.amenties}
        />
      </div>
    </div>
  );
};

export default Card;
