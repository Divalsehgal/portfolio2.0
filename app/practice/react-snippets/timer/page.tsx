"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useRef } from "react";

export default function Page() {
  const [time, setTime] = useState<{ minutes: number }>({ minutes: 0 });
  const [inputValue, setInputValue] = useState<number>(0);
  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Fix here

  const toggleTimer = () => {
    if (time?.minutes || inputValue > 0) {
      setStart(!start);
      setTime({
        minutes: typeof inputValue === "number" ? inputValue : 0,
      });
      setPause(false);
    }
  };
  const clearHandler = () => {
    setStart(false);
    setTime({ minutes: 0 });
    setInputValue(0);
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.valueAsNumber;
    setInputValue(trimmedValue);
    if (!isNaN(trimmedValue)) {
      setTime({ minutes: trimmedValue });
    }
  };

  const pauseHandler = () => {
    setPause(!pause);
  };

  useEffect(() => {
    if (start && time.minutes > 0) {
      if (!pause) {
        timerRef.current = setInterval(() => {
          setTime((prevTime) => {
            const temp = prevTime.minutes - 1;
            if (temp === 0) {
              if (timerRef.current) {
                clearInterval(timerRef.current);
              }
              timerRef.current = null;
              setStart(false);
            }
            return {
              minutes: temp,
            };
          });
        }, 1000);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
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
          <Button onClick={toggleTimer}>{start ? "stop" : "start"}</Button>
          <Button onClick={clearHandler}>reset</Button>
          <Button onClick={pauseHandler} disabled={!start}>
            {pause ? "resume" : "pause"}
          </Button>
        </div>
      </div>
    </div>
  );
}
