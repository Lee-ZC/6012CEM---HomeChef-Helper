import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, Text } from "components";

const MealPlannerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-end mx-auto py-[25px] w-full">
        <div className="flex flex-col items-center justify-start mt-0.5 w-full">
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
                    className="md:ml-[0] ml-[60px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
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
                    className="common-pointer md:ml-[0] ml-[81px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/setting")}
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
          <Line className="bg-black-900_19 h-px mt-[33px] w-full" />
          <div className="font-inter h-[784px] sm:h-[797px] md:h-[880px] max-w-[1309px] mt-[67px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-gray-50 h-[730px] inset-x-[0] mx-auto rounded-[30px] top-[0] w-full"></div>
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[81px] items-start justify-start right-[2%] w-[93%]">
              <Text
                className="md:text-5xl text-[64px] text-black-900 tracking-[-2.56px]"
                size="txtInterSemiBold64"
              >
                Meal Planner
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-[57px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                        size="txtInterMedium12Black90099"
                      >
                        breakfast
                      </Text>
                      <Input
                        name="groupFiftyOne"
                        placeholder="List of breakfast...."
                        className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                        wrapClassName="outline outline-[0.5px] outline-black-900_19 w-full"
                        shape="round"
                      ></Input>
                    </div>
                    <Text
                      className="mt-[26px] text-black-900_99 text-xs tracking-[0.96px] uppercase"
                      size="txtInterMedium12Black90099"
                    >
                      Dinner
                    </Text>
                    <Input
                      name="groupFifty"
                      placeholder="List of dinner....."
                      className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                      wrapClassName="mt-3.5 outline outline-[0.5px] outline-black-900_19 w-full"
                      shape="round"
                    ></Input>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[102px] mt-[325px]">
                      <Text
                        className="text-base text-center text-white-A700 tracking-[-0.32px]"
                        size="txtInterSemiBold16"
                      >
                        Submit
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[48%] md:w-full">
                    <Text
                      className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                      size="txtInterMedium12Black90099"
                    >
                      lunch
                    </Text>
                    <Input
                      name="groupFortyNine"
                      placeholder="List of lunch......"
                      className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                      wrapClassName="outline outline-[0.5px] outline-black-900_19 w-full"
                      shape="round"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-lobster items-center justify-start max-w-7xl mt-[111px] mx-auto md:px-5 w-full">
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

export default MealPlannerPage;
