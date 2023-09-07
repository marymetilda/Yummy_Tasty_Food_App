import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items } = props) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="p-2 m-2 w-full border-b-4 border-b-gray-200 flex items-center gap-4"
            >
              <div className="w-9/12">
                <div className="py-2 text-left">
                  <span className="">{item.card.info.name}</span>
                  <span>
                    - ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs text-left">
                  {item.card.info.description}
                </p>
              </div>
              <div className="w-3/12 relative">
                <img src={CDN_LINK + item.card.info.imageId} />
                <button
                  onClick={() => handleAddItem(item)}
                  className="p-2 rounded-lg bg-black text-white shadow-lg absolute top-0 left-[35%] w-20"
                >
                  Add +
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
