const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search res list for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  expect(searchButton).toBeInTheDocument();

  fireEvent.change(searchInput, {
    target: {
      value: "burger",
    },
  });

  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("should filter top rated restro", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(18);
});
