import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restraut menu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const accordionHeader = screen.getByText("Meal Combos(Save Rs. 45)(13)");
  fireEvent.click(accordionHeader);
});
