import TypedCode from "./TypedCode";

function HeaderCode(props) {
  return (
    <article class="text-left my-3 border-y-2 border-teal-600">
      <div class="py-6 bg-zinc-900 min-h-[30vh]">
        <code class="px-3 text-2xl smvp:text-sm inline-flex">
          <span class="text-green-300">bryce@tuppurainen.com.au</span>
          <span class="text-teal-600">~$</span>
        </code>
        <code class="text-2xl smvp:text-sm inline-flex">history</code>
        <br />
        <code class="text-2xl smvp:text-sm p-3 inline-flex w-[80vw]">
          This site was published in March 2022. I was in my third year of
          Software Engineering at the University of Newcastle, and had developed
          a keen interest in all things full-stack development. Particularly
          anything written in TypeScript. I was teaching myself various NodeJS
          Packages and JS/CSS Frameworks, and developing then deploying various
          sites in my free time for fun and practice including this one. For my
          more recent endeavours see below...
        </code>
        <br />
        <code class="px-3 text-2xl smvp:text-sm inline-flex">
          <span class="text-green-300">bryce@tuppurainen.com.au</span>
          <span class="text-teal-600">~$</span>
        </code>
        <TypedCode code="whoami --scroll-down" />
      </div>
    </article>
  );
}

export default HeaderCode;
