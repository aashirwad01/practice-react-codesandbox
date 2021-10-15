import "./styles.css";

import { useState } from "react";
export default function App3(props) {
  //functionality goes here
  const [sty, setsty] = useState("red");
  const [sz, setsz] = useState(10);

  function changepass(text) {
    console.log(text);

    setsty(text);
  }
  function update(text) {
    if (text == "1") {
      setsz(sz + 2);
    } else if (text == "2") {
      setsz(sz - 2);
    }
  }

  // template goes here
  return (
    <div>
      <h1 style={{ color: sty, fontSize: sz }}>Practice React Method 3 </h1>
      <button onClick={() => update("1")}>Add 2px </button>
      <button onClick={() => update("2")}>Minus 2px </button>
    </div>
  );
}
