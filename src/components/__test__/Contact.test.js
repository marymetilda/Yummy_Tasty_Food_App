import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  test("Should load contact us componet", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us componet", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact us componet", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes[0]).toBeInTheDocument();
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
