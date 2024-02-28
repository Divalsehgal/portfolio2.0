import React, { useState } from 'react';
import { data } from '../TransferList/data';

export const TransferList = () => {
  const [array, setArray] = useState(data);

  const [array1, setArray1] = useState([]);

  const leftChecked = array.some((f) => f.checked);
  const rightChecked = array1.some((f) => f.checked);

  const selectHandler = (id: any) => {
    return function (e) {
      if (e.target.classList.contains('table1') && !rightChecked) {
        const temp = array.map((f) => {
          if (f.id === id) {
            f.checked = !f.checked;
            return f;
          } else {
            return f;
          }
        });

        setArray(temp);
      } else if (e.target.classList.contains('table2') && !leftChecked) {
        const temp = array1.map((f) => {
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
    if (e.target.name === 'left' && rightChecked) {
      let selected = [],
        notSelected = [];
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
    } else if (leftChecked && e.target.name === 'right') {
      let selected = [],
        notSelected = [];
      array.forEach((f) => {
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
          display: 'flex',
          gap: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '30px',
            flexDirection: 'column',
          }}
        >
          <h1>Table 1</h1>
          <div>
            {array.map((m) => {
              return (
                <div
                  style={{
                    border: '1px solid gray',
                    padding: '10px',
                    backgroundColor: m.checked ? 'green' : '',
                  }}
                  className={'table1'}
                  onClick={selectHandler(m.id)}
                >
                  {m.title}
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={buttonHandler} name="left">
          left
        </button>

        <button onClick={buttonHandler} name="right">
          right
        </button>

        <div
          style={{
            display: 'flex',
            gap: '30px',
            flexDirection: 'column',
          }}
        >
          <h1>Table 2</h1>
          <div className="table2">
            {' '}
            {array1.map((m) => {
              return (
                <div
                  style={{
                    border: '1px solid gray',
                    padding: '10px',
                    backgroundColor: m.checked ? 'green' : '',
                  }}
                  className={'table2'}
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
