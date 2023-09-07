import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.svg";
import { headerLinks } from "./data";

export default function Header() {
  const headerRef = useRef();

  useEffect(() => {
    function headerScroll() {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "1.5rem 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "2.5rem 0";
      }
    }

    window.addEventListener("scroll", headerScroll);

    return () => window.removeEventListener("scroll", headerScroll);
  });

  return (
    <header
      className="py-[2.5rem] fixed top-0 left-0 transition-all duration-400 z-50 w-full"
      ref={headerRef}
    >
      <div className="container wrapper">
        <div className="flex justify-between gap-6 flex-col items-center sm:flex-row w-full">
          <a href="/">
            <img src={logo} alt="logo" width={120} />
          </a>
          <nav className="flex gap-4 items-center">
            {headerLinks.map((link, index) => (
              <a
                href={link.route}
                key={index}
                className="text-white opacity-[0.9] text-[1.2rem] transition-opacity duration-500 hover:underline hover:opacity[1]"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
