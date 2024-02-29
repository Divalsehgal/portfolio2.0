import React, { useState } from "react";
import { data } from "./data";
import { Button } from "@/components/ui/button";

export const TransferList = () => {
  const [array, setArray] = useState<any>(data);

  const [array1, setArray1] = useState<any[]>([]);

  const leftChecked = array.some((f:any) => f?.checked);
  const rightChecked = array1.some((f:any) => f?.checked);

  const selectHandler = (id: any) => {
    return function (e: any) {
   let target= e.target as HTMLButtonElement;
      if (target.classList.contains("table1") && !rightChecked) {
        const temp = array.map((f:any) => {
          if (f.id === id) {
            f.checked = !f.checked;
            return f;
          } else {
            return f;
          }
        });

        setArray(temp);
      } else if (target.classList.contains("table2") && !leftChecked) {
        const temp = array1.map((f:any) => {
          if (f.id === id) {
            f.checked = !f.checked;
            return f;
          } else {
            return f;
          }
        });

        setArray1(temp);
      }
    };
  };

  const buttonHandler = (e: any) => {
    if (e.target.name === "left" && rightChecked) {
      let selected :any= [],
        notSelected :any= [];
      array1.forEach((f) => {
        if (f.checked) {
          f.checked = false;
          selected.push(f);
        } else {
          notSelected.push(f);
        }
      });

      setArray1(notSelected);

      setArray((prev: any) => [...selected, ...prev]);
    } else if (leftChecked && e.target.name === "right") {
      let selected:any = [],
        notSelected:any = [];
      array.forEach((f:any) => {
        if (f.checked) {
          f.checked = false;
          selected.push(f);
        } else {
          notSelected.push(f);
        }
      });

      setArray1((prev: any) => [...selected, ...prev]);

      setArray(notSelected);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexDirection: "column",
          }}
        >
          <h1>Table 1</h1>
          <div>
            {array.map((m: any) => {
              return (
                <div
                  key={m.id}
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    backgroundColor: m.checked ? "green" : "",
                  }}
                  className={"table1"}
                  onClick={selectHandler(m.id)}
                >
                  {m.title}
                </div>
              );
            })}
          </div>
        </div>

        <Button onClick={buttonHandler} name="left">
          left
        </Button>

        <Button onClick={buttonHandler} name="right">
          right
        </Button>

        <div
          style={{
            display: "flex",
            gap: "30px",
            flexDirection: "column",
          }}
        >
          <h1>Table 2</h1>
          <div className="table2">
            {" "}
            {array1.map((m) => {
              return (
                <div
                  key={m.id}
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    backgroundColor: m.checked ? "green" : "",
                  }}
                  className={"table2"}
                  onClick={selectHandler(m.id)}
                >
                  {m.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
