import "./styles.css";

import { useState } from "react";
export default function App(props) {
  //functionality goes here
  const [sty, setsty] = useState("blue");

  // template goes here
  return (
    <>
      <Ele text={sty} />
      <button onClick={() => setsty("red")}>Red</button>

      <button onClick={() => setsty("green")}>Green</button>
    </>
  );
}

const Ele = (props) => {
  return (
    <>
      <h1 style={{ color: props.text }}>Practice React Method 1 </h1>
    </>
  );
};
