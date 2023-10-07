import { ShimmerSkeleton } from "./ShimmerSkeleton";

const ShimmerMenu = () => {
  return (
    <div className="bg-linear-grey-white w-full min-h-screen h-full flex flex-col items-center">
      <div className="bg-linear-grey w-full flex flex-col items-center">
        <div className="my-6 h-8 rounded-lg w-[40vw]">
          <ShimmerSkeleton isGradientBackground />
        </div>
        <div className="h-8 rounded-lg w-[40vw]">
          <ShimmerSkeleton isGradientBackground />
        </div>
      </div>
      {Array.from({ length: 10 }, () => (
          <div className="m-4 p-4 w-full h-12 rounded-[4px]">
            <ShimmerSkeleton />
          </div>
        ))}
    </div>
  );
};

export default ShimmerMenu;
