"use client";
import React, { useEffect, useState } from "react";
import { staticCode } from "./sampleCode";
export default function page() {
  // Write your code here
  const data = staticCode;
  const [pdata, setPdata] = useState("please start generating...");
  const [start, setStart] = useState(false);
  let timer;
  const clickHandler = () => {
    setStart(true);
  };

  const generating = () => {
    let count = 0;
    timer = setInterval(() => {
      const temp1 = data;
      count++;
      if (count === temp1.length - 1) {
        clearInterval(timer);
      }

      setPdata((i) => i + temp1[count]);
    }, 10);
  };

  useEffect(() => {
    if (start) {
      generating();
    } else {
      setStart(false);
    }

    return () => {
      setStart(false);
    };
  }, [start]);
  const resetHandler = () => {
    setStart(false);
    setPdata("please start generating...");
    clearInterval(timer);
  };

  return (
    <div>
      <button onClick={resetHandler}>reset</button>
      <button onClick={clickHandler}>start generating</button>

      <div className="generated-text-box">{pdata}</div>
    </div>
  );
}
