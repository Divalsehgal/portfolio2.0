
import { render ,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MentionBox from "../components/MentionBox/MentionBox";

describe("MentionBox Component", () => {

  it("renders with exact input", () => {
    const mockData = [
      {
        id: 1,
        first_name: "Merell",
        last_name: "Covert",
        email: "mcovert0@hibu.com",
        gender: "Male",
      }
    ];

    const { getByPlaceholderText, queryByText } = render(
      <MentionBox data={mockData} />
    );

    const inputElement = getByPlaceholderText(
      "Starts with @ to mention someone ..."
    );
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "@Merell" } });

    expect(queryByText("Merell")).toBeInTheDocument();
  });
});
