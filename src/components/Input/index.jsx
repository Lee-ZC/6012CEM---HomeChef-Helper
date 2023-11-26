import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    amber_600: "bg-amber-600 text-white-A700",
    blue_gray_800: "bg-blue_gray-800 text-white-A700",
    white_A700: "bg-white-A700 text-black-900_7e",
  },
};
const shapes = { round: "rounded-[16px]" };
const sizes = {
  xs: "pb-[7px] pt-2.5 px-[7px]",
  sm: "pb-3.5 pl-2 pr-3 pt-3",
  md: "p-[13px]",
  lg: "pl-[18px] pr-3.5 py-[18px]",
  xl: "pl-5 sm:pr-5 pr-[21px] py-[21px]",
  "2xl": "pb-5 pl-5 pr-3 pt-[22px]",
  "3xl": "pb-[21px] pt-6 sm:px-5 px-[21px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "xl",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["amber_600", "blue_gray_800", "white_A700"]),
};

export { Input };
