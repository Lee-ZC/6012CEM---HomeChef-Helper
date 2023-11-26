import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-[16px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    blue_gray_800: "bg-blue_gray-800 text-white-A700",
    black_900_0c: "bg-black-900_0c text-black-900_99",
    light_blue_50_01: "bg-light_blue-50_01 text-black-900",
    red_900: "bg-red-900 text-white-A700",
    blue_A200: "bg-blue-A200 text-white-A700",
    white_A700: "bg-white-A700",
    green_A400: "bg-green-A400 shadow-bs text-blue_gray-800",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = {
  xs: "p-2",
  sm: "p-3",
  md: "p-[18px]",
  lg: "p-[21px] sm:px-5",
  xl: "p-[26px] sm:px-5",
  "2xl": "pl-[18px] sm:pr-5 pr-[22px] py-[31px]",
  "3xl": "p-[35px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_gray_800",
    "black_900_0c",
    "light_blue_50_01",
    "red_900",
    "blue_A200",
    "white_A700",
    "green_A400",
    "black_900",
  ]),
};

export { Button };
