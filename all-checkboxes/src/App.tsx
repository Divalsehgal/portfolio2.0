import React, { useEffect } from "react";
import Checkbox from "./Components/checkbox";
import { list } from "./list";

export default function App() {
  const [boxState, setBoxState] = React.useState(list);
  const [select, setSelect] = React.useState(false);

  const onChangeHandler = (id) => {
    if (id == "select all") {
      setBoxState((prev) => {
        return prev.map((f) => {
          f.checked = !select;
          return f;
        });
      });
      setSelect(!select);
    } else {
      setBoxState((prev) => {
        return prev.filter((f) => {
          if (f.id === id) {
            f.checked = !f.checked;
            return f;
          } else {
            return f;
          }
        });
      });
    }
  };

  useEffect(() => {
    if (boxState.every((b) => b.checked)) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  }, [boxState]);

  return (
    <div className="h-screen bg-gradient-to-br from-purple-700 to-blue-700 items-center justify-center flex flex-col">
      <Checkbox
        id="select all"
        label={"select all"}
        onChange={onChangeHandler}
        checked={select}
      />
      {boxState?.map((b, index): any => {
        return (
          <React.Fragment key={b.id}>
            <Checkbox
              label={b?.name}
              id={b?.id}
              onChange={onChangeHandler}
              checked={b?.checked}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
