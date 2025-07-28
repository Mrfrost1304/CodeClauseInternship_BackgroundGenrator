import { useContext, useState } from 'react';
import BackgrnContext from '../store/backgroundContext';

const GeneratedBackground = () => {
  const { ColorsArray, angle, isRadial } = useContext(BackgrnContext);
  const [showCSS, setShowCSS] = useState(false);
  const [copied, setCopied] = useState(false);

  const backgroundStyle = isRadial
    ? `radial-gradient(circle, ${ColorsArray.join(', ')})`
    : `linear-gradient(${angle}deg, ${ColorsArray.join(', ')})`;

  const generatedCSS = `
.grad {
  background: ${backgroundStyle};
  background-size: 180% 180%;
  background-position: 0% 50%;
  animation: gradientShift 10s ease infinite;
  min-height: 350px;
  width: 100%;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="container my-4">
      {/* Preview Section */}
      <div className="row justify-content-center">
        <div
          className="col-lg-10 grad rounded-4 shadow border"
          style={{ background: backgroundStyle, minHeight: '350px' }}
        ></div>
      </div>

      {/* Toggle Button */}
      <div className="text-center my-4">
        <button
          className="btn btn-outline-primary px-4"
          onClick={() => setShowCSS(!showCSS)}
        >
          {showCSS ? 'Hide Generated CSS' : 'Show Generated CSS'}
        </button>
      </div>

      {/* CSS Code Display */}
      {showCSS && (
        <div className="row justify-content-center">
          <div className="col-lg-10 position-relative">
            <pre
              className="bg-dark text-white p-4 rounded shadow-sm overflow-auto"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <code>{generatedCSS}</code>
              <button
                onClick={handleCopy}
                className="btn btn-sm btn-light position-absolute"
                style={{ top: '10px', right: '10px' }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratedBackground;
