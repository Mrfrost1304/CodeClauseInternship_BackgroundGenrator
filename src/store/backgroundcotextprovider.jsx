import { useState } from 'react';
import BackgrnContext from './backgroundContext';

const BackgroundContextProvider = ({ children }) => {
  const [ColorsArray, SetcolorArray] = useState([
    { color: '#561ecb', position: 0 },
    { color: '#15a51c', position: 100 },
  ]);
  const [angle, setAngle] = useState(90);
  const [isRadial, setIsRadial] = useState(false);

  const handleColorAdd = (newColor) => {
    SetcolorArray((prev) => [...prev, { color: newColor, position: 100 }]);
  };

  const handleColorDelete = (index) => {
    SetcolorArray((prev) => prev.filter((_, i) => i !== index));
  };

  const handleColorPositionChange = (index, newPosition) => {
    SetcolorArray((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, position: newPosition } : item
      )
    );
  };

  return (
    <BackgrnContext.Provider
      value={{
        ColorsArray,
        handleColorAdd,
        handleColorDelete,
        handleColorPositionChange,
        angle,
        setAngle,
        isRadial,
        setIsRadial,
      }}
    >
      {children}
    </BackgrnContext.Provider>
  );
};

export default BackgroundContextProvider;
