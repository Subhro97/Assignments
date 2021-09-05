import classes from "./CardBottom.module.css";
import Icon from "./Icon";
import Tag from "./Tag";

const CardBottom = (props) => {
  let fam = props.famous.split(',');
  let first = fam[0].slice(0,6);
  let second = fam[0].slice(6);
  let third = fam[1].slice(0,6);
  let fourth = fam[1].slice(6);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "calc(54vh - 33vh)" }}>
        <div style={{ display: "flex" }}>
          <p
            style={{
              fontWeight: "600",
              fontSize: "1.2rem",
              margin: "10px 8px 8px 10px ",
            }}
          >
            {props.name}
          </p>
          <div style={{ display: "flex", gap: "0.3rem", marginTop: "13px" }}>
            <Icon value='true'/>
            <Icon value='true'/>
            <Icon value='true'/>
            <Icon value='true'/>
            <Icon value='false'/>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ margin: "-2px 0px 0px 11px", fontSize: "0.8375rem" }}>
            {props.location[0]}
          </p>
          <hr
            style={{
              margin: "3px 0.3rem",
              height: "0.8rem",
              color: "black",
              backgroundColor: "black",
            }}
          />
          <p
            style={{
              margin: "-2px 0px 0px",
              color: "#898989",
              fontSize: "0.8375rem",
            }}
          >
            {props.location[1]}
          </p>
        </div>
        <div style={{ margin: "-8px 0px 0px 11px" }}>
          <p style={{ fontSize: "0.8675rem" }}>
            <span style={{ color: "#17B169", fontWeight: "500" }}>
              93% Match :{" "}
            </span>
            <span style={{ fontWeight: "bold" }}>{first}</span>
            <span style={{ color: "#898989" }}>{second}</span>
            <span style={{ color: "#17B169", fontWeight: "500" }}>,</span>
            <span style={{ fontWeight: "bold" }}>{third}</span>
            <span style={{ color: "#898989" }}>{fourth}</span>
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#ACE1AF",
            boxSizing: "border-box",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            fontSize: "0.8675rem",
            position: "relative",
            left: "1px",
            top: "-0.3rem",
            padding: "0px 11px 5px",
            width: "23.5rem",
            height: "2.5rem",
          }}
        >
          <p
            style={{
              boxSizing: "border-box",
              margin: "auto",
              paddingTop: "9px",
            }}
          >
            Flat{" "}
            <span style={{ fontWeight: "500" }}>
              Rs
              <span style={{ color: "#0D98BA" }}>2,000</span>
              off + upto Rs <span style={{ color: "#0D98BA" }}>500</span>{" "}
              wallet! to avail...{" "}
              <span style={{ color: "#0D98BA" }}>LOGIN</span>
            </span>
          </p>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", paddingLeft: "9rem" }}>
          <span
            style={{
              fontSize: "0.8375rem",
              color: "#898989",
              textDecoration: "line-through",
              paddingTop: "0.9em",
            }}
          >
            {`₹${props.ofees}`}
          </span>
          <Tag />
          <div style={{position:'relative', top:'0.35rem', left:'-1.9rem'}}>
            <svg height="6" width="6">
              <circle cx="3" cy="3" r="1.5" fill="#ffffff" />
            </svg>
          </div>
          <div
            style={{
              color: "white",
              position: "relative",
              top: "0.7rem",
              left: "-1.9rem",
              fontSize: "0.7735rem",
            }}
          >
            {props.discount}
          </div>
        </div>
        <div style={{ position: "relative", top: "-13px" }}>
          <span
            style={{
              fontSize: "2rem",
              color: "#DB2B42",
              fontWeight: "500",
              paddingLeft: "7.5rem",
            }}
          >
            {`₹${props.nfees}`}
          </span>
          <span
            style={{
              display: "block",
              fontSize: "0.7375rem",
              color: "#898989",
              paddingLeft: "5.6rem",
            }}
          >
            {props.semester}
          </span>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            padding: "6px",
            paddingLeft: "2rem",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              color: "#17B169",
              fontWeight: "500",
              fontSize: "0.8375rem",
              marginRight: "6px",
            }}
          >
            {props.amenties[0]}
          </div>
          <div style={{ position: "relative", top: "-4px", left: "2px" }}>
            <svg height="5" width="5">
              <circle cx="2.5" cy="2.5" r="1.25" fill="#17B169" />
            </svg>
          </div>
          <div
            style={{
              color: "#17B169",
              fontWeight: "500",
              fontSize: "0.8375rem",
              marginLeft: "6px",
            }}
          >
            {props.amenties[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBottom;
