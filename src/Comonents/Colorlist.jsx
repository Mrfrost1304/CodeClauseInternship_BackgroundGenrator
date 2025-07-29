
import { useContext } from 'react';
import BackgrnContext from '../store/backgroundContext';
import ColorBlock from './colorblock';
import ColorPositionBar from './ColorPositionBar';

const ColorList = () => {
  const { ColorsArray } = useContext(BackgrnContext);

  if (!Array.isArray(ColorsArray) || ColorsArray.length === 0) {
    return (
      <div className="container my-4 text-center text-muted">
        <p>No colors selected yet. Please add a color!</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h5 className="text-center mb-4 fw-semibold">🎨 Selected Colors</h5>
      <div className="row justify-content-center">
        {ColorsArray.map(({ color }, index) => (
          <ColorBlock key={index} color={color} index={index}></ColorBlock>
        ))}
      </div>
      <ColorPositionBar />
    </div>
  );
};

export default ColorList;
