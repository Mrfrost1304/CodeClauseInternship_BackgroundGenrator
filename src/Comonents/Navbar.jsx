import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className="bg-body-tertiary ">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Logo"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4 fw-semibold">GradientGen</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="/"
                className={`nav-link fw-medium px-3 ${
                  active === 'home'
                    ? 'active text-white bg-primary'
                    : 'text-dark'
                }`}
                onClick={() => setActive('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/Mrfrost1304/CodeClauseInternship_BackgroundGenrator"
                className={`nav-link fw-medium px-3 ${
                  active === 'code'
                    ? 'active text-white bg-primary'
                    : 'text-dark'
                }`}
                onClick={() => setActive('code')}
              >
                Code
              </a>
            </li>
          </ul>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
