'use client'
import React from "react";

export default function Checkbox({ id, label, onChange, checked }:any) {
  const onChangeHandler = (id:any): any => {
    return function () {
      onChange(id);
    };
  };
  return (
    <div>
      <input
        type="checkbox"
        name={label}
        onChange={onChangeHandler(id)}
        checked={checked}
      />
      <label>{label}</label>
    </div>
  );
}
