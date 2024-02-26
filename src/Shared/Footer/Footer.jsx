const Footer = () => {
  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "Contact", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Add", href: "#" },
    { label: "Portfolio", href: "#" },
  ];

  return (
    <div>
      <footer className="flex flex-col">
        <div className="flex flex-col items-start justify-around gap-5 bg-sky-50 p-10 py-10 md:flex-row md:gap-0 md:items-center">
          <aside className="text-3xl">
            <p>Logistic Business Solution Ltd.</p>
          </aside>
          <nav className="text-lg">
            <ul className="space-y-3">
              {footerLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a
                    className="cursor-pointer hover:underline"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="text-lg">
            <ul className="space-y-3">
              {footerLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <a
                    className="cursor-pointer hover:underline"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <aside className="bg-sky-200 py-5 text-center text-sm">
          <p>&copy; 2024 LBS Ltd. All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
