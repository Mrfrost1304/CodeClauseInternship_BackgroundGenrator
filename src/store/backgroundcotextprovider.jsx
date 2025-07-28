import { useState } from 'react';
import BackgrnContext from './backgroundContext';

const BackgroundContextProvider = ({ children }) => {
  const [ColorsArray, SetcolorArray] = useState(['#561ecb', '#15a51c']);
  const [angle, setAngle] = useState(90);
  const [isRadial, setIsRadial] = useState(false);

  const handleColorAdd = (newColor) => {
    SetcolorArray((prev) => [...prev, newColor]);
  };

  const handleColorDelete = (index) => {
    SetcolorArray((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <BackgrnContext.Provider
      value={{
        ColorsArray,
        handleColorAdd,
        handleColorDelete,
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
