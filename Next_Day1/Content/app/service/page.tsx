"use client";
import React, { useMemo, useState } from "react";

function ServicesPage() {
  const [dark, setDark] = useState(false);
  const [counter, setCounter] = useState(0);

  // function long() {
  //   for (let i = 0; i < 10000; i++) {}
  //   return counter + 1;
  // }
  const long = useMemo(() => {
    for (let i = 0; i < 10000; i++) {}
    return counter + 1;
  }, [counter]);
  console.log(dark);

  return (
    <>
      <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
        servicesPage
      </div>
      <button
        onClick={() => {
          setDark((x) => !x);
        }}
      >
        change theme
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(long);
        }}
      >
        increament
      </button>
    </>
  );
}

export default ServicesPage;
