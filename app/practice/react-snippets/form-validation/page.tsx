'use client'
import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface FormState {
  product: string;
  quantity: number;
}

interface FormStateError {
  product: string;
  quantity: string;
}

export default function Page() {
  const [formState, setFormState] = useState<FormState>({
    product: "",
    quantity: 0,
  });

  const [formStateError, setFormStateError] = useState<FormStateError>({
    product: "",
    quantity: "",
  });

  const validateField = (name: string, value: string | number) => {
    let error = "";

    if (name === "product") {
      error = String(value).trim() === "" ? "Product name is required" : "";
    } else if (name === "quantity") {
      error =
        +value <= 0 || isNaN(+value)
          ? "Quantity must be a valid number greater than 0"
          : "";
    }

    setFormStateError((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    validateField(name, value);
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateField("product", formState.product);
    validateField("quantity", formState.quantity);

    if (isDisabled()) {
      alert("Form submitted: " + formState.product + ", " + formState.quantity);
    }
  };

  const isDisabled = () => {
    return Object.values(formStateError).every((error) => error === "");
  };


  return (
      <form className="text-tertiary-light dark:text-tertiary-dark">
        <Label htmlFor="productName">Product Name</Label>
        <Input
          className=""
          name="product"
          type="text"
          value={formState.product}
          onChange={inputHandler}
          onBlur={blurHandler}
        />
        <p>{formStateError.product}</p>
        <Label htmlFor="productQuantity">Product Quantity</Label>

        <Input
          className=""
          name="quantity"
          type="number"
          value={formState.quantity}
          onChange={inputHandler}
          onBlur={blurHandler}
        />
        <p>{formStateError.quantity}</p>
        <Button type="submit" onClick={submitHandler} disabled={!isDisabled()}>
          submit
        </Button>
      </form>
  );
}

