const Icon = (props) => {
  let color = props.value === 'true' ? 'black' : "#898989" 
  return (
    <div style={{gap:'1rem'}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 512 512"
        width="12px"
        height="12px"
        fill={color}
      >
        <title>star-glyph</title>
        <path d="M510.37,183.83a21.33,21.33,0,0,0-19.71-13.17H334.79L276,13.84a21.33,21.33,0,0,0-39.95,0L177.21,170.66H21.33A21.33,21.33,0,0,0,6.25,207.08L125.71,326.54,86,485.48A21.34,21.34,0,0,0,119.07,508L256,410.21,392.93,508A21.34,21.34,0,0,0,426,485.48L386.29,326.54,505.75,207.08A21.33,21.33,0,0,0,510.37,183.83Z" />
      </svg>
    </div>
  );
};

export default Icon;
