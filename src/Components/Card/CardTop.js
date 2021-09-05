import classes from "./CardTop.module.css";

const CardTop = (props) => {
  return (
    <div className={classes.image}>
      <div className={classes.rating}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: "600" }}>3.9</div>
          <div
            style={{
              boxSizing: "border-box",
              height: "100%",
              paddingTop: "9px",
            }}
          >
            /5
          </div>
        </div>
        <div style={{ margin: "auto", marginTop: "-2px" }}>{props.remark}</div>
      </div>
      <div
        style={{
          position: "relative",
          top: "11.5rem",
          left: "1rem",
          display: "flex",
          gap: "0.8rem",
        }}
      >
        <div style={{position:'relative', display:'flex', gap:'0.5rem', top:'-3.5rem'}}>
          <div className={classes.sub_desc}>{props.tags[0]}</div>
          <div className={classes.sub_desc}>{props.tags[1]}</div>
          <div
            style={{
              color: "white",
              margin: "auto",
              fontSize: "0.8375rem",
              boxSizing: "border-box",
              paddingLeft: "9.5rem",
            }}
          >
            {`#${props.rank}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTop;
