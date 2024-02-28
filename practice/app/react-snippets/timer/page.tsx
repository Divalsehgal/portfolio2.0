'use client'
import { useEffect, useState } from "react";


function page() {
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
    let timer = 0;
    console.log(time.minutes);
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
    <div className="container">
      <div className="top">
        <h1>Timer</h1>
        <div>
          <h5>Enter time</h5>
          <input
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
          <button onClick={toggleTimer}>{!start ? "start" : "stop"}</button>
          <button onClick={resetHandler}>reset timer</button>
          <button onClick={clearHandler}>clear</button>
          <button onClick={pauseHandler} disabled={!start}>
            {!pause ? "pause" : "resume"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;