const reactLogo = require("../img/react-logo.png");
const tailwindLogo = require("../img/tailwind-logo.png");
const netlifyLogo = require("../img/netlify-logo.png");

function Header(props) {
  return (
    <header>
      <div class="min-h-[70vh] content-center justify-center text-center">
        <h2 class="p-6 pt-20 text-lg text-slate-100 font-bold">
          tuppurainen.com.au
        </h2>
        <h1 class="p-6 text-7xl text-slate-100 font-bold">
          Bryce Tuppurainen's Portfolio
        </h1>
        <h2 class="p-6 text-sm text-slate-200 mb-20">
          A portfolio site by Bryce Tuppurainen developed using
          <span class="font-bold"> ReactJS</span>,
          <span class="font-bold"> TailwindCSS</span>, and deployed using
          <span class="font-bold"> Netlify</span>
        </h2>
        <div class="pb-8">
          <p class="text-xs">This site's development-stack:</p>
          <a href="https://reactjs.org/" rel="noreferrer" target={"_blank"}>
            <img
              src={reactLogo}
              alt="ReactJS logo"
              class="inline-block w-[8rem] h-[8rem] rounded-2xl border-sky-300 hover:border hover:rounded-3xl align-top m-3 translate-y-1"
            ></img>
          </a>
          <a href="https://tailwindcss.com/" rel="noreferrer" target={"_blank"}>
            <img
              src={tailwindLogo}
              alt="TailwindCSS logo"
              class="inline-block w-[8rem] h-[8rem] rounded-2xl border-sky-300 hover:border hover:rounded-3xl align-top m-3 translate-y-1"
            ></img>
          </a>
          <a href="https://www.netlify.com/" rel="noreferrer" target={"_blank"}>
            <img
              src={netlifyLogo}
              alt="Netlify logo"
              class="inline-block w-[8rem] h-[8rem] rounded-2xl border-sky-300 hover:border hover:rounded-3xl align-top m-3 translate-y-1"
            ></img>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
