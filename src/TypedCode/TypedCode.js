function TypedCode(props) {
  return (
    <div class="inline-flex">
      <div class="animate-typing h-auto inline-flex">
        <code class="overflow-hidden whitespace-nowrap inline-flex text-2xl">
          {props.code}
        </code>
      </div>
    </div>
  );
}

export default TypedCode;
