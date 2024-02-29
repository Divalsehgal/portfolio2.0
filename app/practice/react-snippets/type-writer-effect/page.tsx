"use client";

import React, { useEffect, useState } from "react";
import { staticCode } from "./sampleCode";
import { Button } from "@/components/ui/button";
export default function Page() {
  const data = staticCode;
  const [pdata, setPdata] = useState("please start generating...");
  const [start, setStart] = useState(false);
  let timer: any;
  const clickHandler = () => {
    setStart(true);
  };

  const generating = () => {
    let count = 0;
    timer = setInterval(() => {
      count++;
      if (count === staticCode.length - 1) {
        clearInterval(timer);
      }

      setPdata((i) => i + staticCode[count]);
    }, 10);
  };

  useEffect(() => {
    if (start) {
      generating();
    }

    return () => {
      clearInterval(timer);
    };
  }, [start]);

  const resetHandler = () => {
    clearInterval(timer);
    setStart(false);
    setPdata("please start generating...");
  };

  console.log("false", false);

  return (
    <div>
      <Button onClick={resetHandler}>reset</Button>
      <Button onClick={clickHandler}>start generating</Button>

      <div className="generated-text-box">{pdata}</div>
    </div>
  );
}
