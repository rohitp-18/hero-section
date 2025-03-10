import React from "react";

const Navbar: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const [lang, setLang] = React.useState("EN");

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        "navbar p-3 d-flex w-100 justify-content-between navbar-expand-lg navbar-dark bg-dark" +
        (show ? " position-sticky top-0 start-0" : " hide")
      }
      style={{ transition: "top 3s" }}
    >
      <a className="navbar-brand" href="#">
        <svg width="124" height="17" viewBox="0 0 124 17" fill="none">
          <path
            d="M9.26836 12.1185V16.665H0.759766V0.00878906H17.3043C23.7502 0.00878906 25.4776 2.56139 25.4776 5.6984V6.28282C25.4776 9.41983 23.6642 12.1271 17.3043 12.1271H9.26836V12.1185ZM9.26836 7.08211H15.2244C16.3846 7.08211 16.7284 6.56643 16.7284 6.00779V5.96483C16.7284 5.36321 16.3932 4.89051 15.2244 4.89051H9.26836V7.08211Z"
            fill="#fff"
          />
          <path
            d="M26.2769 0.00878906H34.7854V5.5351H43.698V0.00878906H52.2066V16.665H43.698V10.7348H34.7854V16.665H26.2769V0.00878906Z"
            fill="white"
          />
          <path
            d="M70.5815 14.6711H62.2534L61.3768 16.665H52.7822L60.6376 0.00878906H72.5926L80.9465 16.665H71.4581L70.5815 14.6711ZM66.3702 5.13973L64.3763 9.75502H68.4071L66.3702 5.13973Z"
            fill="white"
          />
          <path
            d="M91.0021 17C80.0097 17 79.855 12.9949 79.855 11.3362V11.1987H88.5613C88.63 11.3792 88.8964 12.359 91.5607 12.359C93.5976 12.359 94.2938 11.6456 94.2938 10.7432V10.7002C94.2938 9.87511 93.5976 9.136 91.5607 9.136C88.9394 9.136 88.6042 10.2361 88.5613 10.3908H80.0956V0H101.9V4.36601H88.6472V6.55764C89.0683 6.26542 90.7271 5.21689 94.4485 5.21689H94.629C101.548 5.21689 103.069 7.70071 103.069 10.6143V10.7518C103.069 13.6137 101.479 17 92.1194 17H91.0021Z"
            fill="white"
          />
          <path
            d="M123.739 0.00878906V4.66704H112.033V5.96483H123.61V10.5285H112.033V11.9638H123.833V16.665H103.662V0.00878906H123.739V0.00878906Z"
            fill="white"
          />
        </svg>
      </a>

      <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link lh-sm w text-white fw-normal px-4"
              style={{ fontSize: "1rem" }}
              href="#"
            >
              Our Vision
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lh-sm w text-white fw-normal px-4"
              style={{ fontSize: "1rem" }}
              href="#"
            >
              Our Team
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lh-sm w text-white fw-normal px-4"
              style={{ fontSize: "1rem" }}
              href="#"
            >
              Our Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lh-sm w text-white fw-normal px-4"
              style={{ fontSize: "1rem" }}
              href="#"
            >
              Contacts Us
            </a>
          </li>
          <li className="nav-item d-flex align-items-center px-3">
            <button
              className={`border-none bg-transparent lh-sm w text-white fw-normal p-0 ${
                lang === "FR" ? "border-bottom border-2" : ""
              }`}
              style={{ fontSize: "1rem" }}
              onClick={() => setLang("FR")}
            >
              FR
            </button>
            <span className="lh-sm w text-white fw-normal p-0">/</span>
            <button
              className={`border-none bg-transparent lh-sm w text-white fw-normal p-0 ${
                lang === "EN" ? "border-bottom border-2" : ""
              }`}
              style={{ fontSize: "1rem" }}
              onClick={() => setLang("EN")}
            >
              EN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
