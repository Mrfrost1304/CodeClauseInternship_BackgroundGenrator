import { useState } from "react";

const ShowCSSbutton = ({ backgroundStyle }) => {
  const [showCSS, setShowCSS] = useState(false);
  const [copied, setCopied] = useState(false);
  const generatedCSS = `
.gradient-background {
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
    <>
      <div className="text-center my-4">
        <button
          className="btn btn-outline-primary px-4"
          onClick={() => setShowCSS(!showCSS)}
          aria-expanded={showCSS}
          aria-controls="generated-css"
        >
          {showCSS ? "Hide Generated CSS" : "Show Generated CSS"}
        </button>
      </div>

      {showCSS && (
        <div className="row justify-content-center">
          <div className="col-lg-10 position-relative">
            <pre
              id="generated-css"
              className="bg-dark text-white p-4 rounded shadow-sm overflow-auto"
              style={{ whiteSpace: "pre-wrap", position: "relative" }}
            >
              <code>{generatedCSS}</code>
              <button
                onClick={handleCopy}
                className="btn btn-sm btn-light position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </pre>
          </div>
        </div>
      )}
    </>
  );
};
export default ShowCSSbutton;
