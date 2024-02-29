"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Checkbox({ id, label, onChange, checked }: any) {
  const onChangeHandler = (id: any): any => {
    return function () {
      onChange(id);
    };
  };
  return (
    <div>
      <Input
        type="checkbox"
        name={label}
        onChange={onChangeHandler(id)}
        checked={checked}
      />
      <Label htmlFor={label}>{label}</Label>
    </div>
  );
}
