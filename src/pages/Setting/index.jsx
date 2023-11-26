import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const SettingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-10 w-full">
        <div className="flex flex-col justify-start mb-0.5 w-full">
          <div className="flex flex-col gap-[34px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1299px] mx-auto md:px-5 w-full">
              <Text
                className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtLobsterRegular24"
              >
                HomeChef Helper
              </Text>
              <div className="font-inter sm:h-[30px] md:h-[330px] h-[34px] md:ml-[0] ml-[67px] relative w-[78%] md:w-full">
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:mt-0 mt-2.5">
                    <Text
                      className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
                      onClick={() => navigate("/homepage")}
                    >
                      Home
                    </Text>
                    <Text
                      className="common-pointer md:ml-[0] ml-[58px] text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
                      onClick={() => navigate("/homechefrecipe")}
                    >
                      Recipes
                    </Text>
                    <Text
                      className="common-pointer md:ml-[0] ml-[61px] text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
                      onClick={() => navigate("/bloglistpage")}
                    >
                      Blog
                    </Text>
                    <Text
                      className="common-pointer md:ml-[0] ml-[60px] text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
                      onClick={() => navigate("/mealplanner")}
                    >
                      Meal Planner
                    </Text>
                    <Text
                      className="common-pointer ml-20 md:ml-[0] text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
                      onClick={() => navigate("/favoutite")}
                    >
                      Favourite
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
                    >
                      Setting
                    </Text>
                    <Text
                      className="common-pointer md:ml-[0] ml-[70px] text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
                      onClick={() => navigate("/contactpage")}
                    >
                      Contact
                    </Text>
                  </div>
                  <Img
                    className="h-[22px] mb-2 w-[22px]"
                    src="images/img_info.svg"
                    alt="info"
                  />
                </div>
                <Img
                  className="absolute h-[29px] right-[6%] top-[0]"
                  src="images/img_whatsapp.svg"
                  alt="whatsapp"
                />
              </div>
              <Img
                className="h-5 md:ml-[0] ml-[41px] md:mt-0 mt-[5px]"
                src="images/img_rewind.svg"
                alt="rewind"
              />
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
          <div className="bg-gray-50 flex flex-col font-inter items-center justify-end md:ml-[0] ml-[370px] mr-[407px] mt-[137px] p-[47px] md:px-5 rounded-[30px] w-[47%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-20 justify-start mt-[9px] w-[71%] md:w-full">
              <Text
                className="md:ml-[0] ml-[74px] md:text-5xl text-[64px] text-black-900 tracking-[-2.56px]"
                size="txtInterSemiBold64"
              >
                Setting
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                    size="txtInterMedium12Black90099"
                  >
                    Name
                  </Text>
                  <Input
                    name="groupFiftyFive"
                    placeholder="Enter your name..."
                    className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                    wrapClassName="flex outline outline-[0.5px] outline-black-900_19 w-full"
                    type="text"
                    suffix={
                      <div className="h-6 ml-3 pt-0.5 pb-[3px] pl-[3px] pr-0.5 w-6 bg-black-900">
                        <Img
                          className="my-auto"
                          src="images/img_edit.svg"
                          alt="edit"
                        />
                      </div>
                    }
                    shape="round"
                    size="lg"
                  ></Input>
                </div>
                <Text
                  className="mt-[110px] text-black-900_99 text-xs tracking-[0.96px] uppercase"
                  size="txtInterMedium12Black90099"
                >
                  emAIL aDDRESS
                </Text>
                <Input
                  name="groupFiftyThree"
                  placeholder="Your email address..."
                  className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                  wrapClassName="flex mt-3.5 outline outline-[0.5px] outline-black-900_19 w-full"
                  type="email"
                  suffix={
                    <div className="h-6 ml-[35px] pt-0.5 pb-[3px] pl-[3px] pr-0.5 w-6 bg-black-900">
                      <Img
                        className="my-auto"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </div>
                  }
                  shape="round"
                  size="lg"
                ></Input>
                <Text
                  className="mt-[111px] text-black-900_99 text-xs tracking-[0.96px] uppercase"
                  size="txtInterMedium12Black90099"
                >
                  password
                </Text>
                <Input
                  name="groupFiftyFour"
                  placeholder="Enter subject..."
                  className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                  wrapClassName="flex mt-3.5 outline outline-[0.5px] outline-black-900_19 w-full"
                  suffix={
                    <div className="h-6 mt-px ml-3 pt-0.5 pb-[3px] pl-[3px] pr-0.5 w-6 bg-black-900_99">
                      <Img
                        className="my-auto"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </div>
                  }
                  shape="round"
                  size="2xl"
                ></Input>
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[180px] md:ml-[0] ml-[109px] mt-[91px] text-base text-center tracking-[-0.32px]"
                  onClick={() => navigate("/")}
                  shape="round"
                  color="red_900"
                  size="lg"
                  variant="fill"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-lobster items-center justify-start md:ml-[0] ml-[47px] mt-[238px] md:px-5 w-[89%] md:w-full">
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                <Text
                  className="md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtLobsterRegular24"
                >
                  HomeChef Helper
                </Text>
                <div className="flex flex-row font-inter items-start justify-between w-[48%] md:w-full">
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/faq")}
                  >
                    FaQ
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/sitemap")}
                  >
                    Sitemap
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/homechefrecipe")}
                  >
                    Recipes
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/bloglistpage")}
                  >
                    Blog
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/contactpage")}
                  >
                    Contact
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/aboutus")}
                  >
                    About us
                  </Text>
                </div>
              </div>
              <Line className="bg-black-900_19 h-px mt-[61px] w-full" />
              <div className="flex flex-row font-inter sm:gap-10 items-start justify-between mt-[43px] w-3/5 md:w-full">
                <div className="flex flex-col items-center justify-start mt-[9px]">
                  <Text
                    className="text-black-900_99 text-xl"
                    size="txtInterRegular20"
                  >
                    © 2023 HomeChef Helper
                  </Text>
                </div>
                <Img
                  className="h-[29px] mb-[5px]"
                  src="images/img_close.svg"
                  alt="close"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
