function TypedCode(props) {
  return (
    <div class="inline-flex">
      <div class="animate-typing h-auto inline-flex">
        <code class="overflow-hidden whitespace-nowrap inline-flex text-2xl smvp:text-sm">
          {props.code}
        </code>
      </div>
    </div>
  );
}

export default TypedCode;
