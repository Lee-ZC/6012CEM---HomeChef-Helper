import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca gap-[19px] items-center justify-end mx-auto pt-[119px] w-full">
        <div className="flex flex-col gap-[34px] items-center justify-start md:px-5 w-[28%] md:w-full">
          <Text
            className="md:text-5xl text-[64px] text-blue_gray-800 text-center"
            size="txtLexendDecaRegular64"
          >
            Sign In
          </Text>
          <Text
            className="text-base text-blue_gray-800 text-center"
            size="txtLexendDecaRegular16"
          >
            Sign in your account !
          </Text>
          <div className="flex flex-col items-center justify-start w-[300px] md:w-full">
            <Input
              name="name"
              placeholder="Name"
              className="p-0 placeholder:text-white-A700 text-center text-sm w-full"
              wrapClassName="rounded-[10px] w-full"
              type="text"
              color="blue_gray_800"
              size="md"
            ></Input>
            <Input
              name="password"
              placeholder="Password"
              className="p-0 placeholder:text-white-A700 text-center text-sm w-full"
              wrapClassName="mt-8 rounded-[10px] w-full"
              type="password"
              color="blue_gray_800"
              size="md"
            ></Input>
            <div className="h-[156px] md:h-[177px] mt-[22px] relative w-full">
              <div className="absolute flex flex-col font-montserrat h-full inset-[0] items-center justify-center m-auto w-[98%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <div className="bg-blue_gray-800 h-[17px] mb-0.5 rounded-[5px] w-[18px]"></div>
                    <Text
                      className="ml-[7px] text-center text-sm text-teal-900"
                      size="txtMontserratMedium14"
                    >
                      Remember me
                    </Text>
                    <a className="ml-8 text-black-900 text-center text-sm">
                      <Text
                        className="common-pointer"
                        size="txtMontserratMedium14Black900"
                        onClick={() => navigate("/forgotpassword")}
                      >
                        Forgot password?
                      </Text>
                    </a>
                  </div>
                  <Text
                    className="common-pointer mt-[84px] text-black-900 text-center text-shadow-ts text-sm"
                    size="txtMontserratMedium14Black900"
                    onClick={() => navigate("/register")}
                  >
                    Dont have an account ? Sign-Up
                  </Text>
                  <Text
                    className="common-pointer mt-[17px] text-center text-sm text-teal-900"
                    size="txtMontserratMedium14"
                    onClick={() => navigate("/admindashboard")}
                  >
                    Admin
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer absolute capitalize cursor-pointer font-lexenddeca inset-x-[0] min-w-[300px] mx-auto rounded-[10px] text-base text-center top-[26%]"
                onClick={() => navigate("/homepage")}
                color="green_A400"
                size="sm"
                variant="fill"
              >
                login
              </Button>
            </div>
          </div>
        </div>
        <Img className="h-[111px]" src="images/img_vectors.svg" alt="vectors" />
      </div>
    </>
  );
};

export default LoginPage;
