import { ShimmerSkeleton } from "./ShimmerSkeleton";

const Shimmer = () => {
  return (
    <div className="bg-linear-grey-white w-full min-h-screen h-full">
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="m-4 px-8 w-[30vw] h-12 rounded-[4px]">
          <ShimmerSkeleton />
        </div>
        <div className="m-4 p-4 w-[30vw] h-12 rounded-[4px]">
          <ShimmerSkeleton />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {Array.from({ length: 15 }, () => (
          <div className="m-4 p-4 w-[250px] h-[350px] rounded-[4px]">
            <ShimmerSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
