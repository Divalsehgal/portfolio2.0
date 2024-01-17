import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import OptionsBox from "../components/OptionBox/OptionBox";

describe("OptionsBox Component", () => {
  const mockOptions = [
    {
      id: 1,
      first_name: "Merell",
      last_name: "Covert",
      email: "mcovert0@hibu.com",
      gender: "Male",
    },
    {
      id: 2,
      first_name: "Sandy",
      last_name: "Maunton",
      email: "smaunton1@mtv.com",
      gender: "Female",
    },
  ];

  it("renders OptionsBox with options", () => {
    const { getByText } = render(
      <OptionsBox options={mockOptions} onSelect={() => {}} />
    );

    expect(getByText("Merell")).toBeInTheDocument();
  });

  it("calls onSelect when an option is clicked", () => {
    const mockOnSelect = jest.fn();
    const { getByText } = render(
      <OptionsBox options={mockOptions} onSelect={mockOnSelect} />
    );
    fireEvent.click(getByText("Merell"));

    expect(mockOnSelect).toHaveBeenCalledWith("Merell");
  });

});
