"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const refInput = useRef<HTMLInputElement>(null)
 
  // useEffect(() => {
  //   counter.current=counter.current+1;
  // })
  return (
    <h1>
      <label>enter any value:</label>
      <input
        ref={refInput}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}

      />
      <button onClick={() => {
        refInput.current?.focus()
      }}>focus</button>
    </h1>
  );
}
