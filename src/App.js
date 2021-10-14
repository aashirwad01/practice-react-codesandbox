import "./styles.css";

export default function App(props) {
  //functionality goes here

  // template goes here
  return <button onClick={() => alert(props.msg)}>{props.text}</button>;
}
