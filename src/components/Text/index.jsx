import React from "react";

const sizeClasses = {
  txtRobotoMedium14BlueA400dd: "font-medium font-roboto",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMediumItalic36: "font-inter font-medium italic",
  txtRobotoRegular14Black900: "font-normal font-roboto",
  txtMontserratExtraBold14: "font-extrabold font-montserrat",
  txtInterSemiBold32: "font-inter font-semibold",
  txtRobotoMedium20: "font-medium font-roboto",
  txtInterMedium14WhiteA70099: "font-inter font-medium",
  txtRobotoMedium20Black900: "font-medium font-roboto",
  txtInterMedium18: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterMedium12: "font-inter font-medium",
  txtInterSemiBold36: "font-inter font-semibold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtLexendDecaRegular64WhiteA700: "font-lexenddeca font-normal",
  txtInterExtraBold48: "font-extrabold font-inter",
  txtLexendDecaRegular16WhiteA700: "font-lexenddeca font-normal",
  txtMontserratMedium14Black900_1: "font-montserrat font-normal",
  txtLobsterRegular24: "font-lobster font-normal",
  txtInterExtraBold40: "font-extrabold font-inter",
  txtInterMedium12Black90099: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtRobotoMedium14: "font-medium font-roboto",
  txtLexendDecaRegular64: "font-lexenddeca font-normal",
  txtInterRegular16Black90048: "font-inter font-normal",
  txtMontserratMedium14Black900: "font-medium font-montserrat",
  txtInterSemiBold48: "font-inter font-semibold",
  txtMontserratSemiBold12: "font-montserrat font-semibold",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtInterMedium14Black90066: "font-inter font-medium",
  txtInterRegular16Black900: "font-inter font-normal",
  txtInterMedium18Black900: "font-inter font-medium",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtRobotoRegular16Black900: "font-normal font-roboto",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold14WhiteA700: "font-inter font-semibold",
  txtLobsterRegular24WhiteA700: "font-lobster font-normal",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtInterSemiBold64: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtLexendDecaRegular16: "font-lexenddeca font-normal",
  txtMontserratMedium14Gray100: "font-medium font-montserrat",
  txtRobotoRegular16Gray800: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
