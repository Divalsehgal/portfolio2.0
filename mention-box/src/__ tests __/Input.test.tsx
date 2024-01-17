import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Input from "../components/Input/Input";

describe("Input Component", () => {
  it("renders input with exact input", () => {
    const { getByDisplayValue } = render(
      <Input value="@hello" onChange={() => {}} />
    );
    expect(getByDisplayValue("@hello")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input value="" onChange={() => {}} />
    );
    expect(
      getByPlaceholderText("Starts with @ to mention someone ...")
    ).toBeInTheDocument();
  });

  it("renders when value not provided", () => {
    const { getByDisplayValue } = render(
      <Input value="" onChange={() => {}} />
    );
    expect(getByDisplayValue("")).toBeInTheDocument();
  });
});
