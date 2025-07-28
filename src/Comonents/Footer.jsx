const Footer = () => {
  return (
    <footer className=" text-center bg-body-tertiary text-dark py-3 mt-5">
      <div className="container">
        <p className="mb-1">🎨 Gradient Background Generator</p>
        <p className="mb-0">
          Made with ❤️ by <strong>Tushar Saxena</strong>
        </p>
        <small>© {new Date().getFullYear()} All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
