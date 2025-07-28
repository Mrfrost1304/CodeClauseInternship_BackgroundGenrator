import { useContext } from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/css';
import BackgrnContext from '../store/backgroundContext';

const Addcolor = () => {
  const [color, setColor] = useColor('#561ecb');
  const { handleColorAdd } = useContext(BackgrnContext);

  return (
    <div className="container my-4">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="border rounded-3 p-3 shadow-sm bg-dark-subtle">
            <ColorPicker
              width="100%"
              color={color}
              onChange={setColor}
              hideHSV
              dark
            />
            <button
              className="btn btn-primary mt-3 w-100"
              onClick={() => handleColorAdd(color.hex)}
            >
              ➕ Add Color ({color.hex.toUpperCase()})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcolor;
