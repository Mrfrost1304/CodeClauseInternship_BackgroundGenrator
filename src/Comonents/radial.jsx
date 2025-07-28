import { useContext } from 'react';
import BackgrnContext from '../store/backgroundContext';

const Radial = () => {
  const { isRadial, setIsRadial } = useContext(BackgrnContext);

  return (
    <div className="container my-4 d-flex justify-content-center">
      <div className="form-check form-switch fs-5">
        <input
          className="form-check-input"
          type="checkbox"
          id="radialToggle"
          checked={isRadial}
          onChange={(e) => setIsRadial(e.target.checked)}
          role="switch"
          style={{ cursor: 'pointer' }}
        />
        <label className="form-check-label ms-2" htmlFor="radialToggle">
          {isRadial ? 'Radial Gradient' : 'Linear Gradient'}
        </label>
      </div>
    </div>
  );
};

export default Radial;
