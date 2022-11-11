import React, { useRef } from "react";

const Try = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  const blurInput = () => {
    inputRef.current.blur();
  };
  const resetInput = () => {
    inputRef.current.reset();
  };
  return (
    <div>
      <h5>This is Try page</h5>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus on the Input</button>
      <button onClick={blurInput}>Blur on the Input</button>
      <button onClick={resetInput}>Reset on the Input</button>
    </div>
  );
};

export default Try;
