import { useState } from "react";
import Logo from "../../shared/Logo";
import NavButton from "../../shared/NavButton";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-bg-secondary text-color-primary h-20">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Logo />
          <span className="ml-2 font-bold text-xl">Syntara</span>
        </a>
        <div className="hidden md:flex items-center gap-x-10 bg-bg-primary py-3 px-12 rounded-full justify-center">
          <a href="/" className="hover:text-color-secondary">
            Home
          </a>
          <a href="#speciality" className="hover:text-color-secondary">
            Speciality
          </a>
          <a href="#about" className="hover:text-color-secondary">
            About
          </a>
        </div>
        <NavButton mobile={false} />

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-20 left-0 right-0 bg-bg-tertiary z-50 h-screen flex flex-col items-center`}
        >
          <div className="flex flex-col items-center gap-y-9 pt-12">
            <a href="/" className="block hover:text-color-secondary">
              Home
            </a>
            <a href="#speciality" className="block hover:text-color-secondary">
              Speciality
            </a>
            <a href="#about" className="block hover:text-color-secondary">
              About
            </a>
            <NavButton mobile={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
