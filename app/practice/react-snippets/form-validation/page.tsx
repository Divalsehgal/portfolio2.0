'use client'
import react, { useState } from "react";
import "./App.css";
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

  const [formStateError, setFormError] = useState<FormStateError>({
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

    setFormError((prevErrors) => ({
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

  console.log(formState.product, formState.quantity);

  return (
    <>
      <form>
        <label>Product Name</label>
        <input
          className=""
          name="product"
          type="text"
          value={formState.product}
          onChange={inputHandler}
          onBlur={blurHandler}
        />
        <p>{formStateError.product}</p>
        <label>Product Quantity</label>
        <input
          className=""
          name="quantity"
          type="number"
          value={formState.quantity}
          onChange={inputHandler}
          onBlur={blurHandler}
        />
        <p>{formStateError.quantity}</p>
        <button type="submit" onClick={submitHandler} disabled={!isDisabled()}>
          submit
        </button>
      </form>
    </>
  );
}

