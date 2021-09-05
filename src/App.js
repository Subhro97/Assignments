import { useRef, useContext, useState, useEffect } from "react";

import Card from "./Components/Card/Card";
import data from "./Components/data/colleges.json";

let colleges = data.colleges;

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-5rem",
        }}
      >
        <div>
          <ul style={{ listStyleType: "none" }}>
            {colleges.map((item, idx) => {
              if (idx % 2 === 0) {
                if (data.length === idx + 1) {
                  return (
                    <li key={`a${idx}`}>
                      <Card />
                    </li>
                  );
                } else {
                  return (
                    <li key={`a${idx}`}>
                      <Card />
                    </li>
                  );
                }
              }
            })}
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            {colleges.map((item, idx) => {
              if (idx % 2 === 1) {
                return (
                  <li key={`a${idx}`}>
                    <Card />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
