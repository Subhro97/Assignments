import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "./Components/Card/Card";
import oldData from "./Components/data/colleges.json";

console.log(oldData);

let colleges = oldData.colleges.slice(0, 10);

function App() {
  const [data, setData] = useState({
    colleges: colleges,
    oldData: oldData,
    hasMore: true,
  });
  let length = data.colleges.length;

  const fetchMoreData = () => {
    if (length === 50) {
      setData((data) => {
        let length = data.colleges.length;
        let newD = data.oldData.colleges.slice(0, length);
        let oldD = data.oldData;

        return { colleges: newD, oldData: oldD, hasMore: false };
      });
      return;
    }
    setTimeout(() => {
      setData((data) => {
        let length = data.colleges.length + 10;
        let newD = data.oldData.colleges.slice(0, length);
        let oldD = data.oldData;

        return { colleges: newD, oldData: oldD, hasMore: true };
      });
    }, 1500);
  };
  return (
    <>
    <div id='reference' style={{overflow:'hidden'}}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-5rem",
        }}
      >
        <div id="content">
          <ul style={{ listStyleType: "none" }}>
            <InfiniteScroll
              dataLength={length}
              next={fetchMoreData}
              hasMore={data.hasMore}
              loader={<h4>Loading...</h4>}
              style={{overflow:'hidden'}}
            >
              {data.colleges.map((item, idx) => {
                if (idx % 2 === 0) {
                  if (colleges.length === idx + 1) {
                    return (
                      <li key={`a${idx}`}>
                        <Card data={item} />
                      </li>
                    );
                  } else {
                    return (
                      <li key={`a${idx}`}>
                        <Card data={item} />
                      </li>
                    );
                  }
                }
              })}
            </InfiniteScroll>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            <InfiniteScroll
              dataLength={length}
              next={fetchMoreData}
              hasMore={data.hasMore}
              style={{overflow:'hidden'}}
            >
              {data.colleges.map((item, idx) => {
                if (idx % 2 === 1) {
                  return (
                    <li key={`a${idx}`}>
                      <Card data={item} />
                    </li>
                  );
                }
              })}
            </InfiniteScroll>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
