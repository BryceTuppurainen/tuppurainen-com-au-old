import HeaderCode from "../TypedCode/HeaderCode";

const typescriptLogo = require("../img/typescript-logo.png");
const reactLogo = require("../img/react-logo.png");
const tailwindLogo = require("../img/tailwind-logo.png");
const netlifyLogo = require("../img/netlify-logo.png");

function Header() {
  return (
    <header className="h-screen w-screen content-center justify-center text-center bg-gradient-to-br from-gray-900 via-black to-slate-800">
      
        <a href="https://tuppurainen.com.au/" target="_self">
          <h2 className="p-6 pt-20 text-lg text-slate-100 font-bold hover:underline">
            tuppurainen.com.au
          </h2>
        </a>
        <h1 className="p-6 text-7xl text-slate-100 font-bold smvp:text-3xl">
          Bryce Tuppurainen
        </h1>
        <h2 className="p-6 text-sm text-slate-200 mb-20">
          A portfolio site by Bryce Tuppurainen developed using{" "}
          <a
            href="https://reactjs.org/"
            rel="noreferrer"
            target={"_blank"}
            className="font-bold hover:underline"
          >
            ReactJS
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            rel="noreferrer"
            target={"_blank"}
            className="font-bold hover:underline"
          >
            TailwindCSS
          </a>
          , and deployed using{" "}
          <a
            href="https://www.netlify.com/"
            rel="noreferrer"
            target={"_blank"}
            className="font-bold hover:underline"
          >
            Netlify
          </a>
          . Written in{" "}
          <a
            href="https://www.typescriptlang.org/"
            rel="noreferrer"
            target={"_blank"}
            className="font-bold hover:underline"
          >
            TypeScript
          </a>
          .
        </h2>
        <div className="pb-8">
          <p className="text-xs">This site's development-stack:</p>
          <a href="https://reactjs.org/" rel="noreferrer" target={"_blank"}>
            <img
              src={reactLogo}
              alt="ReactJS logo"
              className="inline-block w-[8rem] h-[8rem] rounded-2xl border-sky-200 hover:border-4 hover:rounded-3xl align-top m-3 translate-y-1"
            ></img>
          </a>
          <a href="https://tailwindcss.com/" rel="noreferrer" target={"_blank"}>
            <img
              src={tailwindLogo}
              alt="TailwindCSS logo"
              className="inline-block w-[8rem] h-[8rem] rounded-2xl border-sky-200 hover:border-4 hover:rounded-3xl align-top m-3 translate-y-1"
            ></img>
          </a>
          <a href="https://www.netlify.com/" rel="noreferrer" target={"_blank"}>
            <img
              src={netlifyLogo}
              alt="Netlify logo"
              className="inline-block w-[8rem] h-[8rem] rounded-2xl border-sky-200 hover:border-4 hover:rounded-3xl align-top m-3 translate-y-1"
            ></img>
          </a>
          <a
            href="https://www.typescriptlang.org/"
            rel="noreferrer"
            target={"_blank"}
          >
            <img
              src={typescriptLogo}
              alt="TypeScript logo"
              className="inline-block w-[8rem] h-[8rem] rounded-2xl border-sky-200 hover:border-4 hover:rounded-3xl align-top m-3 translate-y-1"
            ></img>
          </a>
      </div>
      <HeaderCode />
    </header>
  );
}

export default Header;
