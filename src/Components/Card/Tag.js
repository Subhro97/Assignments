const Tag = () => {
  return (
    <div style={{ paddingTop: "4px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        role="img"
        aria-labelledby="tagAltIconTitle"
        height="33px"
        width="40px"
      >
        {" "}
        <title id="tagAltIconTitle">Tag</title>{" "}
        <circle style={{ fill: "#FFFFFF" }} cx="10" cy="12" r="3" />{" "}
        <path
          style={{ fill: "#DB2B42" }}
          d="M8 18l-6-6 6-6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8z"
        />
        {"20 "}
      </svg>
    </div>
  );
};

export default Tag;
