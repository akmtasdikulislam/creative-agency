const Footer = () => {
  return (
    <footer className="bg-primary text-text-secondary p-10 text-center">
      <p className="body-sm">
        © {new Date().getFullYear()} Orange Labs. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
