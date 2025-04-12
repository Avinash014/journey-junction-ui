// ---
// import Navigation from './Navigation.astro';
// import Hamburger from './Hamburger.astro';
// import ThemeIcon from "./ThemeIcon.astro";
import NavBar from "../NavBar";
import Theme from "../Theme";
// const pathname = Astro.url.pathname;
// const {pageTitle} = Astro.props;

export default function Header({ pathName }) {
  return (
    <header className="flex w-full justify-center items-center bg-gray-800">
      {/* <Hamburger /> */}

      {/* <!-- <Navigation pageTitle={pageTitle}/> --> */}
      <div className="w-4/5">
        <NavBar currentPath={pathName} />
      </div>
      <div className="w-1/5">
        <Theme />
      </div>
    </header>
  );
}
