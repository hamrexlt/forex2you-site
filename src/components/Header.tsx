import {
  FC,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
// import logo from "../assets/images/logo-light.png"
const logo = "";

const Header: FC<{ pathname: string }> = ({ pathname }) => {
  const search = useRef(null);
  const menu_toggle = useRef(null);
  const [links, _] = useState([
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    // {
    //     text: "Pricing",
    //     href: "/#pricing"
    // },
    {
      text: "Contact Us",
      href: "/contact-us",
    },
    {
      text: "FAQs",
      href: "/faqs",
    },
  ]);
  function handleSearchClick() {
    (search.current as unknown as HTMLElement).classList.toggle("expanded");
  }
  function handleMenuToggle() {
    (menu_toggle.current as unknown as HTMLElement).classList.toggle(
      "expanded"
    );
  }
  return (
    // <header className="w-full bg-custom-dark-secondary sticky top-0 bottom-0 left-0">
    <header className="w-full bg-dark-primary">
      <div className="container-fluid flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center h-auto pl-[10px] md:pl-[20px] xl:py-0 py-[20px]">
          <a href="#">
            {/* <img src={logo} width="140" alt="" /> */}
            <span className="text-white lg:text-[25px] text-[22px] font-bold">
              Forex2You
            </span>
          </a>
        </div>
        {/* Mobile Nav */}
        <MobileNav links={links} ref={menu_toggle} />
        {/* Nav */}
        <Nav pathname={pathname} links={links} />
        <ul className="flex items-center">
          <a
            onClick={handleMenuToggle}
            href="#"
            className="flex items-center text-white xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
          {/* <a onClick={handleSearchClick} href="#"
            className="text-white text-[24px] border-[rgba(255,255,255,.1)] flex items-center md:pl-[30px] pl-[20px] md:ml-[35px] ml-[20px] border-l border-l-[#e7e1dc] border-solid  custom-transition h-full border-opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 256 256">
              <path fill="currentColor"
                d="m229.7 218.3l-43.3-43.2a92.2 92.2 0 1 0-11.3 11.3l43.2 43.3a8.2 8.2 0 0 0 11.4 0a8.1 8.1 0 0 0 0-11.4ZM40 116a76 76 0 1 1 76 76a76.1 76.1 0 0 1-76-76Z" />
            </svg>
          </a> */}
          <a
            href="https://app.forex2you.org"
            id=""
            className="text-[15px] text-black bg-custom-yellow px-[25px] py-[17px] md:inline-block hidden hover:bg-white hover:text-custom-dark-primary custom-transition ml-[35px]"
          >
            Create Account
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;

const MobileNav = forwardRef(function (props: any, ref: any) {
  const { links } = props;
  return (
    <div ref={ref} className="mobile-nav-wrapper xl:hidden">
      <div
        onClick={() =>
          (ref.current as HTMLElement).classList.toggle("expanded")
        }
        className="mobile-nav-overlay"
      ></div>

      <nav className="mobile-nav-content">
        {/*  */}
        <span
          onClick={() =>
            (ref.current as HTMLElement).classList.toggle("expanded")
          }
          className="absolute top-[20px] right-[15px] cursor-pointer text-[#a2a2b1]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 20 20"
          >
            <g fill="currentColor">
              <path d="M7.172 14.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414l-7.071 7.07Z" />
              <path d="M5.757 7.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415l-7.07-7.071Z" />
            </g>
          </svg>
        </span>
        {/*  */}
        <div className="mb-[30px] flex">
          <a href="#">
            {/* <img src={logo} width="140" alt="" /> */}
            <span className="text-white text-[22px] font-bold inline-block">
              Forex2You
            </span>
          </a>
        </div>
        {/*  */}
        <a
          className="w-full text-center mx-0 mb-[20px] text-black flex items-center bg-custom-yellow justify-center h-[45px]"
          href="https://app.forex2you.org"
        >
          Login
        </a>
        {/*  */}
        <div>
          <ul className="m-0 p-0">
            {links.map(
              (
                link: {
                  href: string | undefined;
                  text:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <li
                  onClick={() =>
                    (ref.current as HTMLElement).classList.toggle("expanded")
                  }
                  className="border-b border-b-[rgba(255,255,255,.1)]"
                  key={index}
                >
                  <a
                    className="flex justify-between leading-[30px] text-text-light font-medium h-[50px] items-center"
                    href={link.href}
                  >
                    {link.text}
                    <button className="w-[30px] h-[30px] p-0 border-none bg-custom-yellow text-black flex items-center justify-center text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/*  */}
        <ul className="mx-0 my-[20px]">
          <li className="text-[14px] relative flex items-center text-[#a2a2b1] font-medium">
            <i className="text-white bg-dark-secondary w-[32px] h-[32px] text-center rounded-[50%] mr-[10px] flex items-center justify-center icon-email"></i>
            <a href="mailto:support@Forex2You.com" className="text-white">
              support@Forex2You.com
            </a>
          </li>
          <li className="text-[14px] relative flex items-center text-[#a2a2b1] font-medium mt-[15px]">
            <i className="text-white bg-dark-secondary w-[32px] h-[32px] text-center rounded-[50%] mr-[10px] flex items-center justify-center icon-telephone"></i>
            <a href="#" className="text-white">
              +1 (617) 209-9232
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
});

const Nav: FC<{ links: Array<any>; pathname: string }> = ({
  links,
  pathname,
}) => {
  return (
    <ul className=" xl:flex items-center hidden">
      {links.map((link, index) => (
        <li
          key={index}
          className={`text-text-primary py-[30px] text-[15px] ${
            index != 0 && "ml-[35px]"
          }`}
        >
          <a
            className={`menu-item custom-transition relative flex items-center ${
              pathname == link.href && "active"
            }`}
            href={link.href}
            x-text="item"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
