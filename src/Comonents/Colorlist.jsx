import { useContext } from 'react';
import BackgrnContext from '../store/backgroundContext';

const ColorList = () => {
  const { ColorsArray, handleColorDelete } = useContext(BackgrnContext);

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
        {ColorsArray.map((color, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center"
          >
            <div className="card shadow-sm border-0" style={{ width: '100%' }}>
              <div
                style={{
                  backgroundColor: color,
                  height: '60px',
                  borderTopLeftRadius: '0.375rem',
                  borderTopRightRadius: '0.375rem',
                }}
              />
              <div className="card-body text-center py-2">
                <div className="text-muted small mb-1">{color}</div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleColorDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorList;
