import "./styles.css";

import { useState } from "react";
export default function App2(props) {
  //functionality goes here
  const [sty, setsty] = useState("blue");
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
      <h1 style={{ color: sty, fontSize: sz }}>Practice React Method 2 </h1>
      <Ele props={changepass} colo="red" />
      <Ele props={changepass} colo="green" />
      <SzChng props="1" sizee={update} name="Add 2px" />
      <SzChng props="2" sizee={update} name="Minus 2px" />
    </div>
  );
}

const Ele = ({ props, colo }) => {
  return (
    <>
      <button onClick={() => props(colo)}>{colo}</button>
    </>
  );
};

const SzChng = ({ props, sizee, name }) => {
  return <button onClick={() => sizee(props)}>{name} </button>;
};
