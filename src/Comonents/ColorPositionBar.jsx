import { useContext, useRef, useState, useEffect } from "react";
import BackgrnContext from "../store/backgroundContext";

const ColorPositionBar = () => {
  const { ColorsArray, handleColorPositionChange } = useContext(BackgrnContext);
  const barRef = useRef(null);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleMouseDown = (index) => (e) => {
    e.preventDefault();
    setDraggingIndex(index);
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
  };

  const handleMouseMove = (e) => {
    if (draggingIndex === null) return;
    if (!barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    let newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    newPosition = Math.min(100, Math.max(0, newPosition));
    handleColorPositionChange(draggingIndex, newPosition);
  };

  useEffect(() => {
    if (draggingIndex !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingIndex]);

  return (
    <div className="container my-4">
      <h5 className="text-center mb-3 fw-semibold">🎨 Gradient Color Positions</h5>
      <div
        ref={barRef}
        className="position-relative bg-light rounded"
        style={{ height: "30px", userSelect: "none" }}
      >
        {ColorsArray.map(({ color, position }, index) => (
          <div
            key={index}
            onMouseDown={handleMouseDown(index)}
            className="position-absolute rounded-circle border border-dark"
            style={{
              backgroundColor: color,
              width: "20px",
              height: "20px",
              top: "5px",
              left: `calc(${position}% - 10px)`,
              cursor: "pointer",
              zIndex: 10,
            }}
            title={`Color: ${color}, Position: ${position.toFixed(1)}%`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPositionBar;
