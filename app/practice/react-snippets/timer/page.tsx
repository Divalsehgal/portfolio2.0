"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Page() {
  const [time, setTime] = useState({ minutes: 0 });
  const [inputValue, setInputValue] = useState(0);
  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(false);
  const resetHandler = () => {
    setStart(false);
    setTime({ minutes: inputValue });
  };

  const toggleTimer = () => {
    if (time?.minutes > 0) {
      setStart(!start);
      setPause(false);
    }
  };
  const clearHandler = () => {
    setStart(false);
    setTime({ minutes: 0 });
    setInputValue(0);
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setInputValue(value);
    setTime({ minutes: value });
  };

  const pauseHandler = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let timer: any = 0;
    if (start && time.minutes > 0 && !pause) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const temp = prevTime.minutes--;
          if (temp === 0) {
            clearInterval(timer);
            setStart(false);
          }
          return {
            minutes: temp,
          };
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start, time.minutes, pause]);

  return (
    <div className="container text-tertiary-light dark:text-tertiary-dark">
      <div className="top">
        <h1>Timer</h1>
        <div>
          <h5>Enter time</h5>
          <Input
            type="number"
            value={inputValue}
            name="minutes"
            disabled={start}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="bottom">
        <div>{start && time?.minutes}</div>
        <div className="button">
          <Button onClick={toggleTimer}>{!start ? "start" : "stop"}</Button>
          <Button onClick={resetHandler}>reset timer</Button>
          <Button onClick={clearHandler}>clear</Button>
          <Button onClick={pauseHandler} disabled={!start}>
            {!pause ? "pause" : "resume"}
          </Button>
        </div>
      </div>
    </div>
  );
}
