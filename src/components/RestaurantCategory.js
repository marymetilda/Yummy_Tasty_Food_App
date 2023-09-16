import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  shouldShowItems,
  handleButtonClick,
} = props) => {
  return (
    <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      {/**Header */}
      <button
        onClick={handleButtonClick}
        className="w-full flex justify-between"
      >
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </button>
      {/**Accordion Body */}
      {shouldShowItems && (
        <ItemList items={data.itemCards} buttonLabel="Add +" />
      )}
    </div>
  );
};

export default RestaurantCategory;
