import { useContext } from "react";
import BackgrnContext from "../store/backgroundContext";

const ColorBlock=({index,color})=>{
    const{handleColorDelete} = useContext(BackgrnContext);
    return (
        <>
        <div
            
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
        </>
    );
}
export default ColorBlock;