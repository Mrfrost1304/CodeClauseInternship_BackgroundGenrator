import { useContext } from 'react';
import BackgrnContext from '../store/backgroundContext';

const Angle = () => {
  const { angle, setAngle } = useContext(BackgrnContext);

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <label htmlFor="angle-input" className="form-label fw-semibold">
                🎯 Set Linear Gradient Angle
              </label>
              <div className="input-group">
                <span className="input-group-text">°</span>
                <input
                  type="number"
                  id="angle-input"
                  className="form-control"
                  min="0"
                  max="360"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                />
              </div>
              <div className="form-text mt-1 text-muted">
                Choose an angle between 0° and 360°
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Angle;
