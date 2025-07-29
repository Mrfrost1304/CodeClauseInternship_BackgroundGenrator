import { useContext, useRef, useState, useEffect } from "react";
import BackgrnContext from "../store/backgroundContext";

const ColorPositionBar = () => {
  const { ColorsArray, handleColorPositionChange } = useContext(BackgrnContext);
  const barRef = useRef(null);
  const [dragIndex, setDragIndex] = useState(null);

  const updatePosition = (x) => {
    const rect = barRef.current.getBoundingClientRect();
    let pos = ((x - rect.left) / rect.width) * 100;
    pos = Math.min(100, Math.max(0, pos));
    handleColorPositionChange(dragIndex, pos);
  };

  useEffect(() => {
    const move = (e) => updatePosition(e.touches ? e.touches[0].clientX : e.clientX);
    const up = () => setDragIndex(null);

    if (dragIndex !== null) {
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
      window.addEventListener("touchmove", move);
      window.addEventListener("touchend", up);
    }

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [dragIndex]);

  return (
    <div className="container my-4">
      <h6 className="text-center fw-semibold">Color Positions</h6>
      <div ref={barRef} className="position-relative bg-light rounded" style={{ height: 30, touchAction: "none" }}>
        {ColorsArray.map(({ color, position }, i) => (
          <div
            key={i}
            onMouseDown={() => setDragIndex(i)}
            onTouchStart={() => setDragIndex(i)}
            style={{
              backgroundColor: color,
              left: `calc(${position}% - 10px)`,
              width: 20,
              height: 20,
              top: 5,
              zIndex: ColorsArray.length - i,
              cursor: "pointer",
            }}
            className="position-absolute rounded-circle border border-dark"
            title={`${color} at ${position.toFixed(1)}%`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPositionBar;
