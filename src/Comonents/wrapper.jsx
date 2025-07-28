const ColorControls = ({ children }) => {
  return (
    <div className="container my-4">
      <div
        className="glass-wrapper p-4 rounded-4 shadow-lg mx-auto"
        style={{ maxWidth: '900px' }}
      >
        <h4 className="text-center mb-4">Gradient Controls</h4>
        {children}
      </div>
    </div>
  );
};

export default ColorControls;
