import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";

const passwordOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-teal-900 flex flex-col font-lexenddeca gap-[39px] items-center justify-end mx-auto pt-[60px] w-full">
        <div className="flex flex-col items-center justify-start md:px-5 w-[28%] md:w-full">
          <Text
            className="md:text-5xl text-[64px] text-center text-white-A700"
            size="txtLexendDecaRegular64WhiteA700"
          >
            Register
          </Text>
          <Text
            className="mt-9 text-base text-center text-white-A700"
            size="txtLexendDecaRegular16WhiteA700"
          >
            Register and start managing your candidates!
          </Text>
          <div className="flex flex-col items-center justify-start mt-[31px] w-[84%] md:w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
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
                name="email"
                placeholder="Email"
                className="p-0 placeholder:text-white-A700 text-center text-sm w-full"
                wrapClassName="rounded-[10px] w-full"
                type="email"
                color="blue_gray_800"
                size="md"
              ></Input>
            </div>
            <Input
              name="password"
              placeholder="Password"
              className="p-0 placeholder:text-white-A700 text-center text-sm w-full"
              wrapClassName="mt-8 rounded-[10px] w-full"
              type="password"
              color="blue_gray_800"
              size="md"
            ></Input>
            <SelectBox
              className="mt-[26px] rounded-[10px] text-center text-sm w-full"
              placeholderClassName="text-white-A700"
              indicator={
                <Img
                  className="h-1.5 mr-[0] outline-white-A700_01 outline-[1px] outline w-3"
                  src="images/img_arrowdown_white_a700_01.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="password_One"
              options={passwordOneOptionsList}
              isSearchable={false}
              placeholder="Role"
              color="blue_gray_800"
              size="xs"
              variant="fill"
            />
            <Button
              className="common-pointer !text-white-A700 capitalize cursor-pointer min-w-[300px] mt-[17px] rounded-[10px] text-base text-center"
              onClick={() => navigate("/homepage")}
              color="green_A400"
              size="sm"
              variant="fill"
            >
              login
            </Button>
          </div>
        </div>
        <div className="font-montserrat h-[120px] md:px-5 relative w-full">
          <Text
            className="common-pointer mb-[-8px] mx-auto text-center text-gray-100 text-shadow-ts text-sm z-[1]"
            size="txtMontserratMedium14Gray100"
            onClick={() => navigate("/")}
          >
            Already have an account ? Sign In
          </Text>
          <Img
            className="h-[111px] mt-auto mx-auto"
            src="images/img_vectors_gray_300.svg"
            alt="vectors"
          />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
