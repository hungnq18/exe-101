import { Box, Button, Link } from "@mui/material";
import logo from "../../assets/icon-etoad.svg";

const Header = ({ scrolled }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-[#cc99ff]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-slate-800 rounded-md p-1.5 hover:bg-slate-900">
            <Box
              component="img"
              src={logo}
              alt="E-toad Logo"
              sx={{
                height: 32,
                width: "auto",
                filter: "brightness(0) invert(1)", // This makes the logo white
              }}
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            color="buttonPrimary"
            underline="none"
            sx={{
              "&:hover": {
                color: "buttonPrimary.hover",
              },
              "&:active": {
                color: "buttonPrimary.active",
              },
              textTransform: "capitalize",
            }}
          >
            About
          </Link>

          <Link
            target="_blank"
            href="https://viewdaihoc.fpt.edu.vn/fpt-ha-noi/index.html"
            color="buttonPrimary.main"
            underline="none"
            sx={{
              "&:hover": {
                color: "buttonPrimary.hover",
              },
              "&:active": {
                color: "buttonPrimary.active",
              },
              textTransform: "capitalize",
            }}
          >
            View FPT University 360
          </Link>

          <Link
            target="_blank"
            href="https://viewdaihoc.fpt.edu.vn/fpt-ha-noi/index.html"
            color="buttonPrimary.main"
            underline="none"
            sx={{
              "&:hover": {
                color: "buttonPrimary.hover",
              },
              "&:active": {
                color: "buttonPrimary.active",
              },
              textTransform: "capitalize",
            }}
          >
            Class Room Virtual Tour
          </Link>
        </nav>

        <Button className="bg-white text-black border border-gray-200 hover:bg-gray-100">
          <span className="mr-2 text-slate-900">Contact</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            color="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 2C3.22386 2 3 2.22386 3 2.5C3 2.77614 3.22386 3 3.5 3H11.5C11.7761 3 12 2.77614 12 2.5C12 2.22386 11.7761 2 11.5 2H3.5ZM3 7.5C3 7.22386 3.22386 7 3.5 7H11.5C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8H3.5C3.22386 8 3 7.77614 3 7.5ZM3 12.5C3 12.2239 3.22386 12 3.5 12H11.5C11.7761 12 12 12.2239 12 12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
