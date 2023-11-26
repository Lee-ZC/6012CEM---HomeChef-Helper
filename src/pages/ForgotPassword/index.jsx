import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca sm:gap-10 md:gap-10 gap-[125px] items-center justify-end mx-auto pt-[120px] w-full">
        <div className="flex flex-col items-center justify-start md:px-5 w-[41%] md:w-full">
          <Text
            className="md:text-5xl text-[64px] text-blue_gray-800 text-center"
            size="txtLexendDecaRegular64"
          >
            Forgot Password
          </Text>
          <Text
            className="mt-[31px] text-base text-blue_gray-800 text-center"
            size="txtLexendDecaRegular16"
          >
            Enter Email Address
          </Text>
          <div className="flex flex-col items-center justify-start mt-9 w-[58%] md:w-full">
            <Input
              name="username"
              placeholder="Email Address"
              className="font-lexenddeca p-0 placeholder:text-white-A700 text-center text-sm w-full"
              wrapClassName="rounded-[10px] w-full"
              type="email"
              color="blue_gray_800"
              size="sm"
            ></Input>
            <Button
              className="capitalize cursor-pointer font-lexenddeca min-w-[300px] mt-[59px] rounded-[10px] text-base text-center"
              color="green_A400"
              size="sm"
              variant="fill"
            >
              Send
            </Button>
            <Button
              className="common-pointer !text-black-900 cursor-pointer font-medium font-montserrat leading-[normal] min-w-[107px] mt-[30px] text-center text-sm"
              onClick={() => navigate("/")}
              shape="square"
            >
              Back to Sign In
            </Button>
          </div>
        </div>
        <Img className="h-[111px]" src="images/img_vectors.svg" alt="vectors" />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
