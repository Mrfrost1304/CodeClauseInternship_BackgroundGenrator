import { useContext, useState } from "react";
import BackgrnContext from "../store/backgroundContext";
import ShowCSSbutton from "./ShowCSS";

const GeneratedBackground = () => {
  const { ColorsArray, angle, isRadial } = useContext(BackgrnContext);

  const gradientStops = ColorsArray
    .map(({ color, position }) => `${color} ${position}%`)
    .join(", ");

  const backgroundStyle = isRadial
    ? `radial-gradient(circle, ${gradientStops})`
    : `linear-gradient(${angle}deg, ${gradientStops})`;

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div
          className="col-lg-10 grad rounded-4 shadow border"
          style={{ '--background-gradient': backgroundStyle, minHeight: "350px" }}
        ></div>
      </div>

      <ShowCSSbutton backgroundStyle={backgroundStyle}></ShowCSSbutton>
    </div>
  );
};

export default GeneratedBackground;
