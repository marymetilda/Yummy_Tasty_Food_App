import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render Restaurant card component", () => {
  render(<RestaurantCard restData={MOCK_DATA}/>);

  const name = screen.getByText("Lavonne");

  expect(name).toBeInTheDocument();
});
