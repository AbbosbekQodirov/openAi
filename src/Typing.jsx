import { TypeAnimation } from "react-type-animation";

function Typing({text}) {
  return (
    <TypeAnimation
      speed={70}
      sequence={[
        text, // Types 'One'
        1000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "20px", display: "inline-block" }}
    />
  );
}

export default Typing;
