import React from "react";
// import classNames from "classnames";

export function ShimmerSkeleton({isGradientBackground }) {
  // const isPillVariant = variant === "pill";
  // const isSmallDimension = dimension === "sm";
  // const isExtraSmallDimension = dimension === "xs";
  // const isMediumDimension = dimension === "md";
  // const isLargeDimension = dimension === "lg";

  // const ShimmerskeletonStyle = classNames(
  //   "bg-main-grey-4 relative overflow-hidden z-20",
  //   {
  //     "rounded-full aspect-square": variant === "circle",
  //     "rounded-[4px] aspect-square": variant === "square",
  //     "rounded-[4px] w-full": variant === "rectangle",
  //     "rounded-lg w-full": isPillVariant && isExtraSmallDimension,
  //     "rounded-xl w-full": isPillVariant && isSmallDimension,
  //     "rounded-2xl w-full": isPillVariant && isMediumDimension,
  //     "rounded-3xl w-full": isPillVariant && isLargeDimension,
  //     "h-4": isExtraSmallDimension,
  //     "h-6": isSmallDimension,
  //     "h-8": isMediumDimension,
  //     "h-12": isLargeDimension,
  //     "h-16": dimension === "xl",
  //     "h-24": dimension === "xxl",
  //     "h-75": dimension === "graph",
  //   }
  // );

  return (
    <div className='w-full h-full bg-main-grey-4 relative overflow-hidden z-20'>
      <div className="absolute z-10 left-0 top-0 w-full h-full overflow-hidden animate-shimmer">
        <div className="w-[90%] h-full bg-linear-grey" />
      </div>
      {isGradientBackground && (
        <div className="bg-linear-grey-white absolute inset-0 z-50" />
      )}
    </div>
  );
}

ShimmerSkeleton.defaultProps = {
  isGradientBackground: false,
};
