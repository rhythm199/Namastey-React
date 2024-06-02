const Footer = () => {
  return (
    <div className="footer">
      Created By
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/rhythm-shukla-938090174/"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      {new Date().getFullYear()}
      <strong>
        Indian<span>Food</span>
      </strong>
    </div>
  );
};

export default Footer;